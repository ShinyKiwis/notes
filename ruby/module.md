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

So what is the difference between inherting from a class and mixing in a module is that you can mix in more than one modules!

In cases where you want numerous extra behaviors for a class’s instances—and you don’t want to stash them all in the class’s superclass and its ancestral classes—you can use modules to organize your code in a more granular way. (Kind of multi inheritance huh ?)
