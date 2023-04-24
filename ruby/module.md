# Module
## What is module ? 
Like classes, modules are bundles of methods and constants. However, modules don't have **instances**; instead, we specify that we want to add some more functionality of a particular module to that of a class or of a specific object.

Fun fact, the `Class` class is a subclass the `Module` class, so every class object is also a module object 

```ruby
class A 
end 

puts A.superclass
puts Class.superclass
```

*Results:*
```
Object
Module
Object
```

## Basic of module creation 
```ruby
module MyFirstModule
  def ruby_version
    system("ruby -v")
  end
end
```

When we write a class, we can then create instances of the class. Those instances can execute the class's instance methods. In contrast, modules don’t have instances. Instead, modules get mixed in to classes, using the `include` method or the `prepend` method. A module “mixed in” in this manner is sometimes referred to as a “mix-in.” The result of mixing in a module is that instances of the class have access to the instance methods defined in the module. 

```ruby
module MyFirstModule
  def ruby_version
    system("ruby -v")
  end
end

class ModuleTester
  include MyFirstModule
end
mt = ModuleTester.new 
mt.ruby_version
```

*Results:* `ruby 3.1.3p185 (2022-11-24 revision 1a6b16756e) [x86_64-linux]`

So the difference between inherting from a class and mixing in a module is that you can mix in more than one modules!

In cases where you want numerous extra behaviors for a class’s instances—and you don’t want to stash them all in the class’s superclass and its ancestral classes—you can use modules to organize your code in a more granular way. (Kind of multi inheritance huh ?)

To practice creating module, we will write a module encapsulates the characteristics of a stack! `code/stack.rb`

Viewing the code, you will see some differences between `require/load` and syntax of `include`.

When using `require` or `load`, the argument in "quotation" mark, while `include` use in form of a constant. 
The reason is simple because the former take "string" as argument. More fundamentally, these `require` and `load`
are locating disk files, whereas `include`, `extend`, or `prepend` perform a program-space, in-memory operation that has nothing 
to do with files.

Notice that our class’s name is a noun, whereas the module’s name is an adjective. Neither of these practices is mandatory, but they’re both common. Rubyists often use adjectives for module names to reinforce the notion that the module defines a behavior.

## Modules, clases and method lookups

You already know that when an object receives a message, the intended (and usual) result is the execution of a method with the same name as the message in the object’s class or that class’s superclass—and onward, up to the Object or even BasicObject class—or in a module that has been mixed into any of those classes. 

> In case you forget, this is a mechanism of message sending operator.

But how come this about ? Or what happen in ambiguous case such as module and class have same method name ? 
Which one will the object choose to execute when the method is called ?

### Illustrate the basics of method lookup 
> You can look up MRO in python for similiar thing


```ruby 
module M 
  def report
    puts "'report' method in module M"
  end
end 
class C 
  include M 
end

class D<C 
end 

obj = D.new 
obj.report
obj.unknown
```

*Results:*
```
/tmp/mdeval//modulemd_77_93.rb:15:in `<main>': undefined method `unknown' for #<D:0x00007f2beec7a940> (NoMethodError)

obj.unknown
   ^^^^^^^^
'report' method in module M
```

Let's see what happen first? There is a instance method `report` in module `M` and this module mixed into class `C`, then class `D` is subclass of `C`, and finally `obj` is instance of `D`.

So what happen as object-eye view of method looking:

You’re the object, and someone sends you a message. You have to figure out how to respond to it—or whether you even can respond to it.

> I suppose you have the book already, turn to page 192 to start reading

The search ends when the method being searched for is found, or with an error condition if it isn’t found. The error condition is triggered by a special method called `method_missing`, which gets called as a last resort for otherwise unmatched messages. 

**Question: How far does the method search go ?**

These sections contains a lot of examples and theory, go read the book my friend.

### How prepend works ?

Every time you `include` a module in a class, you’re affecting what happens when instances of that class have to resolve messages into method names. The same is true of `prepend`. The difefrence is that if you prepend a module to a class, the object looks in that module first, before it looks in the class.

Here's an example: 

```ruby 
module MeFirst
  def report 
    puts "report method in MeFirst"
  end
end
class Person 
  prepend MeFirst 
  def report 
    puts " report method in Person"
  end
end

person = Person.new 
person.report
puts Person.ancestors
```

*Results:*
```
report method in MeFirst
MeFirst
Person
Object
Kernel
BasicObject
```

Why this happen ? Since we have prepended the `MeFirst` module to the class. That means that the instance of the class will look in the module first when it’s trying to find a method called `report`.

As you can see with `ancestors`, the MeFirst module stands in front of `Person`

To sum up, we can use prepend when we want a module’s version of one or more methods to take precedence over the versions defined in a given class. 

### How extend works ?

It is another way of mixing a module into a class. The difference between `include` and `extend` is in how these keywords make the module's methods available:
- `include`: makes module's methods available as **instance methods** 
- `extend`: makes module's methods available as **class methods** 

## Method lookup's rules summary 
To resolve a message into a method, an object looks for the method in this order: 
1. Modules prepended to its class, in reverse order of prepending 
2. Its class 
3. Modules included in its class, in reverse order of inclusion 
4. Modules prepended to its superclass 
5. Its class's superclass 
6. Modules included in its superclass

### super function 

Inside the body of a method definition, we can use the super keyword to jump up to the next-highest defniition in the method-lookup path of the method we’re currently executing.

So what happens if that method allow arguments ? 

- Called with no argument list (empty or otherwise), `super` automatically forwards the arguments that were passed to the method from which it’s called. 
- Called with an empty argument list—`super()`—super sends no arguments to the higher-up method, even if arguments were passed to the current method. 
- Called with specific arguments—`super(a,b,c)`—super sends exactly those arguments. 

## Another big question, what happen when method lookup failed ?
