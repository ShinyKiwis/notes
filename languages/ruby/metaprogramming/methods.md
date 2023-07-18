**Table of contents** 
${toc}

# Methods
As we know, objects talk to each other all the time. Some languages such as Java, feature a compiler
that presides over this chatting. 

For every method call, the compiler will try to see that receiving object has a matching method, **this is called
static type checking** and the language that adopt it are called **static languages**.

Dynamic languages such as Python and Ruby, don't have a compiler policing method calls. As a consequence, we can start
a program that call some non-existent metho on an object. Everything works fine until that specific line of code executed.

That's one of advantage of static type checking: the compiler can spot some of our mistakes before the code runs. However,
such languages force us to write repetitive methods such as getters and setters or we call them **boilerplate methods**, just
to make the compiler happy.

## Dynamic Methods
> Where we learn how to call and define methods dynamically and remove the duplicated code

When we call a method, we usually use the **dot notation**:

```ruby 
class MyClass
    def my_method(my_arg)
        my_arg*2
    end
end

obj = MyClass.new 
puts obj.my_method(3)

puts obj.send(:my_method, 3)
```

*Results:*
```
6
6
```

There is another way to call this method, that is using the `send` method. But the question is why should 
we use this `send` method instead of the traditional `dot` notation ?

Let's have a look at some examples!

### The Camping Example
> Camping is a minimalist Ruby web framework, the Camping application stores its configuration parameters as key-value pairs 
in a file created with YAML.

The configuration file might look like this:

```yml 
admin: Bill 
title: RubyLand
topic: Ruby and more
```

Camping copies keys and values from the file into its own configuration object. The question is in real life, how can we know 
what key will the users use ? So we may won't know which method to be called.

The configuration code might look like this:

```ruby
conf.admin = 'Bill'
conf.title = 'RubyLand'
conf.topic = 'Ruby and more'
```

For this reason, Camping resorts to **Dynamic Dispatch**. For each key-value pair, it compose the name of an assignment method, 
such as `admin=()` and send the method to `conf`:

```ruby
if conf.rc and File.exists?(conf.rc)
    YAML.load_file(conf.rc).each do |k,v|
        conf.send("#{k}=", v)
    end
end
```

Neat!

### The Test::Unit Example
`Test::Unit` uses a naming convention to decide which methods are tests. A TestCase looks inside its own public methods and
selects the methods that have names starting with test:

```ruby
method_names = public_instance_methods(true)
tests = method_names.delete_if {|method_name| method_name !~ /^test./}
```

Now TestCase has an array of all test methods. Later, it uses `send()` to call
each method in the array. This particular flavor of Dynamic Dispatch, is sometimes called **Pattern Dispatch**, simply because
it filters methods based on a patern in their names.

### Defining Methods Dynamically
We can define a method on the spot with `Module#define_method()`, we just need to provide
a method name, and a block.

```ruby
class Test
    define_method :my_method do |my_arg|
        my_arg * 3
    end
end
obj = Test.new 
puts obj.my_method(3)

```

*Results:* `9`

`define_method` is executed within `Test`, so `my_method()` is defined as an instance method of `Test`. 
This technique of defining method at runtime is called a **Dynamic Method** 
