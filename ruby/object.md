# Objects in Ruby 
## Talking to Objects
When writing a Ruby proram, the main activities are creating objects, endowing them with abilities and asking them to perform actions. Ruby comes to the idea of manipulating data through object via the programming language design principle called object orietation.

### Creating a generic object
Ruby differs from some other object-oriented languages, the real action is with the individual objects: every object has the potential to learn behaviors that its class didn't teach it. For that reason, the concept of class fits on top of the object concept, not the other way around. 

>  Fun fact, a class in Ruby is itself an object.

To create a generic object, we can use:

```ruby 
obj = Object.new
```

All Ruby objects are created with certain innate abilities, cetain methods that they know how to execute because they're Ruby objects. But we can expand what they can do.

### Define an object's behavior 
```ruby 
obj = Object.new
def obj.talk 
  puts "I am talking as an object"
end
obj.talk
```

*Results:* `I am talking as an object`

Voila, our object can talk now!

Let's have a closer look, with `obj.talk`, the object `obj` unstands, or **respons to**, the message `talk`. An object is said to respond to a message if the object has a method defined whose name corresponds to the message. 

There are few things to consider about the dot-based message-sending syntax:
- The dot is the message-sending operator. The message on the right is sent to the object (or receiver ) on the left
- The receiver can be, and often is, represented by a variable that stands in for an object. But a receiver can also be a literal object construct (it can be a string in quotation marks for example)
- In practice, the message being sent is almost always the name of a method, If there's no method by that name, error-handling measures are taken.

### Methods that take arguments
- Parameters: the variables listed in the method definition
- Arguments: the values the user supply to the method when he/she is calling it

#### Types of argumeent 
#### Required and optional arguments 
It’s possible to write a method that allows any number of arguments. To do this, put a star (an asterisk, *) in front of a single argument name: 

```ruby 
def obj.multi_args(*x)   
  puts "I can take zero or more arguments!" 
end 
```
The *x notation means that when you call the method, you can supply any number of arguments (or none).

Another example:
```ruby 
def two_or_more(a,b,*c)
  # Function body
end
```
In this example, a and b are required arguments. The final *c will sponge up any other arguments that you may send and put them into an array in the variable c.

#### Default values for arguments 
Default arguments are indicated with an equal sign and a value. Default means that if the user doesn't provide an argument, it will use its defaul value.

#### Order of parameters and arguments 
Basically, Ruby tries to assign values to as many variables as possible. Keep this rule in your mind!

### Return value of a method 
The value can be return implicitly as the last executed expression or with `return` keyword.

For examples:
```ruby 
def print
  "message that will be returned"
end

def nothing 
  # return nil
end

def available? 
  true
end
```

It is a convention that a method that ends with `?` indicating that it will return a boolean value!

One thing worth noticing here:
```ruby 
if puts "You'll see this" 
  puts "but not this"
end
```

*Results:* `You'll see this`

The reason for this is, a call to `puts` return `nil` and `nil` has a Boolean value of `false`!

## The innate behaviors of an object
To see a list of innate methods, we can call the `methods` method. 

```ruby 
p Object.new.methods.sort
```

*Results:* `[:!, :!=, :!~, :<=>, :==, :===, :=~, :__id__, :__send__, :class, :clone, :define_singleton_method, :display, :dup, :enum_for, :eql?, :equal?, :extend, :freeze, :frozen?, :hash, :inspect, :instance_eval, :instance_exec, :instance_of?, :instance_variable_defined?, :instance_variable_get, :instance_variable_set, :instance_variables, :is_a?, :itself, :kind_of?, :method, :methods, :nil?, :object_id, :private_methods, :protected_methods, :public_method, :public_methods, :public_send, :remove_instance_variable, :respond_to?, :send, :singleton_class, :singleton_method, :singleton_methods, :taint, :tainted?, :tap, :then, :to_enum, :to_s, :trust, :untaint, :untrust, :untrusted?, :yield_self]`

That's alot! But we will have a look at three following methods: 
- `object_id`
- `respond_to?`
- `send` (synonym: `__send__`)

Before going further, we have one question: "What are the differences between generic objects and basic objects ?"

Generic objects are produced when we call `Object.new`, while `BasicObject.new` will create a basic object, which is like a kind of proto-object that can do very little. They don't even have `methods` method to display its method. However, it has only 8 methods - enough for the object to exist and be identifiable, and not much more. 

### Identifying objects uniquely with the object_id method 
Every object in Ruby has a unique ID number associated with it. You can see an object’s ID by asking the object to show you its object_id, using this or similar code:
```ruby 
obj = Object.new 
puts obj.object_id
```

*Results:* `60`

Great! Let's have a look at another case: 
```ruby 
a = Object.new 
b = a 
puts a.object_id
puts b.object_id
```

*Results:*
```
60
60
```

Shalala, they are the same! In other words, variables `a` and `b` are different, but they both refers to same object. But the opposite scenario can happen also, sometimes 2 objects appear to be the same but they're not.

```ruby
string_1 = "Hello" 
string_2 = "Hello" 
puts string_1.object_id
puts string_2.object_id

```

*Results:*
```
60
80
```

### Querying an object’s abilities with the respond_to? method 
Ruby objects respond to messages. At different times during a program run, depending on the object and what sorts of methods have been defined for it, an object may or may not respond to a given message.

```ruby 
obj = Object.new 
obj.talk
```

*Results:*
```
/tmp/mdeval//objectmd_135_138.rb:2:in `<main>': undefined method `talk' for #<Object:0x00007fc80da28050> (NoMethodError)

obj.talk
   ^^^^^
```
You can determine in advance (before you ask the object to do something) whether the object knows how to handle the message you want to send it, by using the `respond_to?` method. 

`respond_to?` is an example of instrospection or reflection, two terms that refer to examining the state of a program while it's running and it is often used with `if` statement.


```ruby
obj = Object.new 
if obj.respond_to?("talk")
  obj.talk
else
  puts "Sorry"
end

```

*Results:* `Sorry`

Until now, we’ve used the dot operator (.) to send messages to objects. Nothing wrong with that. But what if you don’t know which message you want to send? 

### Sending messages to objects with the send method 

```ruby
if obj.respond_to?(user_input_method)
  puts obj.send(user_input_method)
else 
  puts "Sorry"
end

```

We can use this `send` method, in case the message is a user input!

#### Using `__send__` or `public_send` instead of `send`
It’s not uncommon for programs to define a method called send that conflicts with Ruby’s built-in send method. Therefore, Ruby gives you an alternative way to call send: `__send__`. By convention, no one ever writes a method with that name, so the built-in Ruby version is always available and never comes into conflict with newly written methods.

The difference between plain `send` and `public_send` is that `send` can call an object’s private methods, and `public_send` can’t.

## Variables, objects, and references 
Let's have a look at an example:
```ruby 
str = "Hello"
abc = str 
str.replace("Goodbye")
puts str
puts abc 
```

*Results:*
```
Goodbye
Goodbye
```

The answer for this is simple, variables in Ruby (most of them) don't hold object's value but instead a references to the value it is containing. That is why changing `str` will also affect `abc`, because they are referencing to same object!

### The un-reference: immediate values 
Some objects in Ruby are stored in variables as immediate values. These include integers, symbols (which look like :this), and the special objects true, false, and nil. When you assign one of these values to a variable (x = 1), the variable holds the value itself, rather than a reference to it.

The immediate-value representation rule has a couple of interesting ramifications, especially when it comes to integers. For one thing, any object that’s represented as an immediate value is always exactly the same object, no matter how many variables it’s assigned to. There’s only one object 100, only one object false, and so on. 

### Duping and freezing objects
If you want to protect objects from being changed inside methods to which you send them, you can use the dup method, which duplicates an object:
```ruby 
s = "Original string content!"
def change_string(s)
  s = "HI"
  puts s
end
change_string(s.dup)
puts s

```

*Results:*
```
HI
Original string content!
```

Or you can `freeze` an object, which prevents it from undergoing further change:
```ruby 
s = "Original string content!"
s.freeze
def change_string(s)
  s.replace("New string content")
  puts s
end
change_string(s)
```

*Results:*
```
/tmp/mdeval//objectmd_250_258.rb:4:in `replace': can't modify frozen String: "Original string content!" (FrozenError)
	from /tmp/mdeval//objectmd_250_258.rb:4:in `change_string'
	from /tmp/mdeval//objectmd_250_258.rb:7:in `<main>'
```

There's also a method called `clone`. It’s a lot like `dup`. The difference is that if you clone a frozen object, the clone is also frozen—whereas if you dup a frozen object, the duplicate isn't frozen.

But watch out for the array!

> Hint: Try to freeze an array of strings, and changing the elements with replace!

### Local variables and the things that look like them 
When Ruby sees a plain word sitting there—a bareword identifier, like `s`, `ticket`, `puts`, or `user_name`, it interprets it as one of three things 
- A local variable
- A keyword
- A method call

So here is how Ruby decides what it's seeing when it encounters a plain identifier:
1. If the identifier is a keyword, it’s a keyword
2. If there’s an equal sign (=) to the right of the identifier, it’s a local variable undergoing an assignment. 
3. Otherwise, the identifier is assumed to be a local variable or method call, both of which are treated the same way by the Ruby interpreter. 

Ruby will “call” the presumed local variable or method, which causes the identifier to be evaluated. If you use an identifier that isn’t any of the three things listed above, then Ruby will complain and halt execution with a fatal error. The error message you get when this happens is instructive:

```bash
ruby - e 'x'
undefined local variable or method 'x' for main:Object (NameError) 
```

Note that Ruby can’t tell whether you thought x was a variable or a method. It knows that x isn’t a keyword, but it could be either of the other two. So the error message includes both.
