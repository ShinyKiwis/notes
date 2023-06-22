# Variables 
## Identifier family 
- Variables:
  - Local
  - Instance
  - Class
  - Global 
- Constants
- Keywords
- Method names
## Local Variables
Local variables start with lowercase letter or underscore and may contains numbers. Ruby refers the convetion of using snake_case instead of camelCase like JavaScript.

Some examples:
```ruby 
x, string, valid, name, age
```

## Instance Variables
This type of variable serves the purpose of storing information of individual object, always start with `@` and follow the rules of local variables 

Some examples:
```ruby 
@age
@last_name
@first_name
```

## Class Variables
This type of variable severs the purpose of storing information per class hierarchy, same rules with instance variables but start with `@@`

Some examples:
```ruby 
@@age
@@number_of_student
```

## Global Variables
Start with `$` and can begin with capital letters.

Some examples:
```ruby 
$LOAD_PATH
```

## Constants 
Constants begin with an uppercase letter, the convention is use either pascal case `FirstName` or underscore-separated all-uppercase words `FIRST_NAME`

# Method calls, messages and Ruby Objects
It is interesting that, Ruby sees all datastructures, and values from simple scalar (atomic) values like integers or strings to complex data stucture like arrays as **objects**. Every object is capable of understanding a certain set of **messages**. Each message that an object understand corresponds directly to a **method**. 

Message sending is achieved via the special dot operator: the message to the right of the dot is sent to the object on the left of the dot.

Let's have a look at an example:

```ruby 
"100".to_i
```

The dot means that message `to_i` is sent to the object `"100"`. There are 2 ways to say about this mechanism:
- The string `"100"` is the receiver of the message 
- Method `to_i` is being called on the string `"100"`

But the huge question here is why we have 2 ways ?

We can put anything on the right of dot, and there's nothing guarantee that the receiver will have the corresponding method that match the message we sent because objects can intercept unknown messages and try to make sense of them. This is most often achieved using the `method_missing` method.

But what about this example: 
```ruby 
puts "Hi"
```

There aren't any dot and also no explicit receiver for the message `puts`, so who is the receiver in this scenario ? The answer is the default object `self`

## Origin of objects in classes 
A class defines an object's funcionality, and every object is an instance of **exactly** one class (Ruby doesn't have multiple inheritance).

Objects can change, extending its functionality which don't exist in the original class. The class is responsible for launching objects into existence through a process called **instantiation**, but thereafter object has its own life-time.
