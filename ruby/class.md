# Classes
Let's have a look at how we create a generic object.

```ruby 
obj = Object.new 
```

`Object` is a built-in Ruby class. When we use a dot notation on a class, we can send a message to the class. Classes can respond to messages, just like objects; in fact, as we’ll have reason to be aware of in any number of situations, classes are objects.

The `new` method is a constructor: a method whose purpose is to manufacture and return to we a new instance of the class, a newly minted object.

Just like other languages, we defined a class with keyword `class` and named it with a constants. 

> A constant: a special type of identifier recognizable by the fact that it begins with a capital letter.

### Classes can be opened again

It’s possible to reopen a class and make additions or changes. Here’s an example: 

```ruby 
class C 
  def x 
  end 
end

class C 
  def y 
  end
end 
```

But the question here is why we have to do that ? 

One reason to break up class definitions is to spread them across multiple files. If we require a file that contains a class definition (perhaps you load it from the disk at runtime from another file), and you also have a partial defniition of the same class in the file from which the second file is required, the two definitions are merged.

We can spread code for a single class over multiple files or over multiple locations in the same file. But be aware that it’s considered better practice not to do so, when possible.
### Note
Unlike other language, constants in Ruby can be overwritten after they're set! Although Ruby might throw some warning for us.

## Instance methods 
Methods defined inside a class and intended for use by all instances of the class, are called instance methods. They don’t belong only to one object. Instead, any instance of the class can call them.

The previous way to define a method such as `ticket.event` is the kind of method which we define for one particular object is called **singleton method** 

One more thing to note, methods in Ruby can be overridden and the last definition will be called when an instance call it.

> When we override a method, the new version takes precedence.

## Instances variables and object state
The instance variable enables individual objects to remember state.  

Instance variables work much like other variables: you assign values to them, and you read those values back; you can add them together, print them out, and so on. But instance variables have a few differences:

- Start with single `@`
- Instance variables are only visible to the object to which they belong.
- An instance variable initialized in one method inside a class can be used by any instance method defined within that class. 

## Setter and Getter

Let's have a look at a setter:
```ruby
def set_name(string)
  @name = string 
end
```

The argument `string` is passed into `set_name` and assigned to `@name`. But Ruby has some specialized method-naming conventions that let you write setter methods in a way that’s more elegant than sticking set_ in front of a descriptive word like name.

```ruby 
def name=(string)
  @name = string 
end
```
`name=` do the same with `set_name` after all.

Here is the corresponding getter method 
```ruby
def name 
  @name
end
```
Programmers use the term syntactic sugar to refer to special rules that let you write your code in a way that doesn’t correspond to the normal rules but that’s easier to remember how to do and looks better.

However, there is one thing to remember about this `=` thing. 

We may see `ticket.price = 63.00` in a program, we might assume that ticket.price is some kind of `l-value` to which the value 63.00 is being assigned. **But it isn’t**.

The ability to write your own =-terminated methods and the fact that Ruby provides the syntactic sugar way of calling those methods open up some interesting possibilities.

One possibility is abuse. It’s possible to write =-terminated methods that look like they’re going to do something involving assignment but don’t:

```ruby 
class Silly 
  def price=(x)
    puts "Something"
  end
end 
s = Silly.new 
s.price = 112.3
```

It looks like we are assigning something but in fact, it not!

Another possibility is equal sign methods can also serve as filters or gatekeepers.

```ruby 
def price=(amount)     
  if (amount * 100).to_i == amount * 100       
    @price = amount     
  else       
    puts "The price seems to be malformed"     
  end   
end 
```

We can also use this kind of filtering technique to normalize data—that is, to make sure certain data always takes a certain form.

### Note
Setter methods don’t return what you might think. When you use the syntactic sugar that lets you make calls to = methods that look like assignments, Ruby takes the assignment semantics seriously. Assignments (like x = 1) evaluate to whatever’s on their right-hand side. 

Methods usually return the value of the last expression evaluated during execution. But = method calls behave like assignments: the value of the expression `TravelAgentSession.new.year=19` is **19**, even though the year= method returns 2019. 

The idea is to keep the semantics consistent. Under the hood, it’s a method call; but it looks like an assignment and behaves like an assignment with respect to its value as an expression. 

## Attributes and the attr_* method family 
An attribute is a property of an object whose value can be read and/or written through the object 

The previous `name=` method can be described as an attribute writer method.

The attributes of Ruby objects are implemented as reader and/or writer methods wrapped around instance variables—or, if you prefer, instance variables wrapped up in reader and/or writer methods.

## self as default receiver
You’re seeing more method calls without an explicit receiver; there’s no left-hand object and no dot in **attr_reader**. 

In the topmost level of a class defniition body, self is the class object itself. So the object receiving the attr_reader mes-sage is the actual class object Ticket.

There are 3 single methods for us to use:
- `attr_reader`: like a getter 
- `attr_writer`: like a setter 
- `attr_accessor`: like a getter + a setter

## Inheritance and the Ruby class hierarchy 
Here is a syntax for inheritance: 

```ruby 
class Magazine < Publication
```
The symbol < designates `Magazine` as a subclass of `Publication`.

### Single Inheritance
Ruby doesn’t allow multiple inheritance; every Ruby class can have only one superclass, in keeping with the principle of single inheritance.  

Ruby’s single inheritance doesn’t restrict you: Ruby provides modules, which are bundles of programming functionality similar to classes.

The single-inheritance principle means that you can’t just draw a big tree of entities and then translate the tree directly into a class hierarchy. Inheritance often functions more as a convenient way to get two or more classes to share method defniitions than as a definitive statement of how real-world objects relate to each other in terms of generality and specificity. 

But the single-inheritance limitation means that you can’t bank on designing a hierarchy of classes that cascade downward in strict tree-graph fashion.

Now let's make thing more interesting, shall we ?

The class `Object` is almost at the top of the inheritance chart. Every class is either a subclass of `Object`, a sub-subclass of `Object`, or, at some distance, a direct descendant of `Object`: 

```ruby 
class C 
end 
class D < C 
end 

puts D.superclass 
puts D.superclass.superclass
puts D.superclass.superclass.superclass
```

*Results:*
```
C
Object
BasicObject
```

### Basic Object 
The BasicObject class comes before Object in the Ruby class family tree. The idea behind BasicObject is to offer a kind of blank-slate object—an object with almost no methods.

## Classes as objects and message receivers 
Classes are special objects: they’re the only kind of object that has the power to spawn new objects (instances). Nonetheless, they’re objects. 

### Creating class objects 
Every class—Object, Person, Ticket—is an instance of a class called Class.

We can do something like 
```ruby 
my_class = Class.new do 
  def say_hello 
    puts "Something"
  end
end
```

`Class` and `Objec`t are both classes. They’re also both objects. Which came first? How can the class Class be created unless the class Object already exists? 

Ruby must do some of this chicken-or-egg stuff to get the class and object system up and running. If you want to know in brief how it works, it’s like this: every object has an internal record of what class it’s an instance of, and the internal record inside the object Class points back to Class itself.

### How class objects call methods 
When you send a message to a class object, it looks like this:
```ruby 
Ticket.some_message
```

or if you’re inside a class-definition body and the class is playing the role of the default object `self`, it looks like this: 
```ruby 
class Ticket 
  some_message #Such as attr_accessor
  ...
```
That’s how the class object gets messages. But where do the methods come from to which the messages correspond?  

To understand where classes get their methods, think about where objects in general get their methods (except modules)

- From their class 
- From the superclass and earlier ancestors of their class 
- From their own store of singleton methods (the “talk” in def obj.talk) 

**Scenario 1** 

Instance methods of the class Class can call methods that are defined as instance methods in their class. Ticket, for example, is an instance of Class, and Class defines an instance method called new. That’s why we can write. 

```ruby 
Ticket.new
```

**Scenario 2** 
The superclass of Class is Module. Instances of Class therefore have access to the instance methods defined in Module; among these are the `attr_accessor`. That's why we can write 
```ruby 
class Ticket 
  attr_reader :venue, :date 
  attr_accessor :price
end
```
`attr_reader` and `attr_accessor` go directly to the class object `Ticket`, which is in the role of the default object self at the point when the calls are made. 

**Scenario 3** 
We can give the class a **singleton**  method such as:

```ruby
def Ticket.most_expensive(*tickets)
  tickets.max_by(&:price)
end
```

``&``: is an abbreviated way of iterating over each of the elements in the tickets array, it is often used with the map method, iterating over each element in an array, hash, or range and applying a method: 
```ruby 
puts ["havoc", "tests"].map(&:capitalize)
```

*Results:*
```
Havoc
Tests
```

The method `most_expensive` is defined directly on the class object Ticket, in singleton-method style. A singleton method defined on a class object is commonly referred to as a class method of the class on which it’s defined. The idea of a class method is that you send a message to the object that’s the class rather than to one of the class’s instances. 

### Class methods vs instances methods 
By defining `Ticket.most_expensive`, we’ve defined a method that we can access through the class object Ticket but not through its instances. 

Remember: 
- Classes are objects 
- Instances of classes are objects, too. 
- A class object (like `Ticket`) has its own methods, its own state, and its own identity. It doesn’t share these things with instances of itself. Sending a message to Ticket isn’t the same thing as sending a message to fg or cc or any other instance of Ticket. 


## Constants 
We can access the constant outside of class using `::` notation, just like accessing something oustide of the class like in old friend C++

### Reassigning vs. modifying constants 
The difference between reassigning a constant name and modifying the object referenced by the constant is important, and it provides a useful lesson in two kinds of change in Ruby: changing the mapping of identifiers to objects (assignment) and changing the state or contents of an object.
