**Table of contents** 
${toc}

# Object Model
## Open Classes
Let's build our scenario. We are looking at the program called "BookWorm" (The name taken from Metaprogramming Ruby book) and we came across the following code snippet.

```ruby 
def to_alphanumeric(str)
    str.gsub /[^\w\s]/, ''
end
```

As we can see, to use this function, we simly pass a str into it. But it is not very object oriented, right ? But how can we do something like 

```ruby
"23 hello 21".to_alphanumeric
```

Welp, you may think to create a new class and do a lot of work to achieve this feature, however in Ruby, you can **reopen the class** and add methods to it!.

```ruby
class String
    def to_alphanumeric
        gsub /[^\w\s]/, ''
    end
end
```

Now we can call it with something like `"random_string".to_alphanumeric`. But to understand this, we have to understand about classes 

### Inside Class Definitions
In Ruby there is no real distinction between code that defines a class and code of any other kind. We can put any code you want in a class definition, let's have a look at following example:

```ruby 
3.times do 
    class C 
        puts "I am inside class C"
    end
end
```

*Results:*
```
I am inside class C
I am inside class C
I am inside class C
```

As we expected, the string will be printed out 3 times, but the main question is **Did Ruby create 3 classes with the same name ?**

The answer is no! To prove this, we will see the following example.

```ruby
class D 
    def x; 'x'; end
end

class D 
    def y; 'y'; end
end

my_obj = D.new 
puts my_obj.x 
puts my_obj.y
```

*Results:*
```
x
y
```

Voila, when the previous code mention class D for the first time, not class by that name exists yet. So, Ruby steps in and defines the class and the `x()` method.

The second mention, class D already exists, so Ruby **reopens** it and defines a method named `y()`

### Problem with Open Classes
In large codebases, as we are able to reopen any classes we want even the core one such as `Numeric`, `Array`,... We may accidentally **override** a function that have been used in many places in our codebase. This may cause confusion and extremely frustrating error as well as unexpected behavior in our code.

## Monkey See, Monkey Patch (Monkey Patching)
Now let's see we have another code snippet, YAY!
```ruby 
def replace(array, from, to)
    array.each_with_index do |e,i|
        array[i] = to if e == from
    end
end

book_topics = ['html', 'java', 'css']
replace(book_topics, 'java', 'ruby')
p book_topics
```

*Results:* `["html", "ruby", "css"]`

So here is how this function works! Again, we want to do it with object oriented way, so we simply, reopen and it and add a replace function. But now, if your codebase is large, it may breaks, and the unit tests may fail! What happened ?

If we have a look at the list of methods of class `Array` by using 

```ruby 
[].methods.grep '^re'
```

We found out that, in this core class there is a function called `replace` also, our code just override it!.

This is the dark side to Open Classes: if you casually add bits and
pieces of functionality to classes, you can end up with bugs like the one you just encountered. Some people would frown upon this kind of reckless patching of classes, and they would refer to the previous code with a derogatory name: they’d call it a **Monkeypatch**.

> Monkey patching is a technique used to dynamically update the behavior of a piece of code at run-time.

## The Truth About Classes
### What's in an Object 
For the following code snippet:
```ruby
class MyClass
    def my_method
        @v = 1
    end
end

obj = MyClass.new 
p obj.class
p obj.instance_variables
```

*Results:*
```
MyClass
[]
```

For `obj`, what does it contains ?

#### Instance Variables 
Most importantly, objects contain instance variables, we are not supposed to peak at them, but we can do that anyway by calling `Object#instance_variables()`.

In Ruby, there is no connection between an object's class and its instance variables. Instance variables just spring into existence when you assign them a value, so you can have objects of the same class that carry different sets of instance varables.

As you can see with the above code block, we haven't call the method `my_medthod()` so we don't have `@v` in our `instance_variables`!

#### Methods 
Besides having instance variables, objects also have methods. Like instance variables, we can use `Object#methods()`, to get a list of an object's methods. 


