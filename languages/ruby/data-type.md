# Data Types 
## Numbers
There are two main types of numbers in Ruby: 
- Integers: 10,23,4 
- Float: 2.5,3.0,12.3

It's important to keep in mind that, doing arithmetic with two integers in Ruby will always return integer value. 

```ruby 
puts 17/5
```

*Results:* `3`

To obtain accurate answer, replace one integer with float.

```ruby 
puts 17/5.0
```

*Results:* `3.4`

To convert between float and integer and vice versa.

```ruby 
puts 2.to_f 
puts 3.4.to_i
```

*Results:*
```
2.0
3
```

## Strings 
Strings can be formed with either double `""` or single `''` quotation marks, also known as string literals. If you want string interpolation use double quote marks instead of single one.

**For concatenation** 

There are 3 ways to do it:
- plus operator
- shovel operator 
- concat method

```ruby 
# With the plus operator:
puts "Welcome " + "to " + "Odin!"    #=> "Welcome to Odin!"

# With the shovel operator:
puts "Welcome " << "to " << "Odin!"  #=> "Welcome to Odin!"

# With the concat method:
puts "Welcome ".concat("to ").concat("Odin!")  #=> "Welcome to Odin!"

```

*Results:*
```
Welcome to Odin!
Welcome to Odin!
Welcome to Odin!
```

**For substrings**

```ruby 
puts "hello"[0]
puts "hello"[0,4]
puts "hello"[0..1]
puts "hello"[-2]
```

*Results:*
```
h
hell
he
l
```

**For interpolation**

```ruby 
name = "Odin"
puts "Hello, #{name}"

```

*Results:* `Hello, Odin`

## Symbols 
Strings can be changed, so every time a string is used, Ruby has to store it in memory even if an existing string with the same value already exists. Symbols, on the other hand, are stored in memory only once, making them faster in certain situations.

One common application where symbols are preferred over strings are the keys in hashes. We’ll cover this in detail in the hashes lesson later in the course.

## Booleans 
Simply have two values:
- true 
- false 

## Nil 
In Ruby, nil represents “nothing”. Everything in Ruby has a return value. When a piece of code doesn’t have anything to return, it will return nil. This is pretty abstract, but it will make more sense as you learn and use Ruby more.
