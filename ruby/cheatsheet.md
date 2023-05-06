# Cheatsheet for Ruby
> This cheatsheet created by ShinyKiwis
# Numbers
```ruby 
# Addition
puts 1 + 1 

# Subtraction
puts 2-1 

# Multiplication 
puts 2*5 

# Exponent
puts 2**3 

# Division 
puts 17/5 

# Modulus 
puts 8%2 
puts 10%4


```

*Results:*
```
2
1
10
8
3
0
2
```
> Keep in mind: arithmetic between 2 integers will result in with an **integer** 

### Modulo vs Remainder 
```ruby
puts 16.remainder(5)
puts 16%5

```

*Results:*
```
1
1
```



### Some useful methods 
```ruby
puts 6.even?
puts 7.odd?
``````

*Results:*
```
true
true
```

## Strings
### Concatenation 
```ruby
# With plus operator
puts "Ruby" + " is " + "fun"

# With shovel operator 
puts "Ruby" << " is " << "fun"

# With concat method 
puts "Ruby".concat(" is ").concat("fun")
```

*Results:*
```
Ruby is fun
Ruby is fun
Ruby is fun
```

### Escape characters and String interpolation
- \\  #=> Need a backslash in your string?
- \b  #=> Backspace
- \r  #=> Carriage return, for those of you that love typewriters
- \n  #=> Newline. You'll likely use this one the most.
- \s  #=> Space
- \t  #=> Tab
- \"  #=> Double quotation mark
- \'  #=> Single quotation mark
```ruby
new_line = "new line"
puts "Hello\n#{new_line}."
```

*Results:*
```
Hello
new line.
```

### Some useful methods 
```ruby
# Capitalize 
puts "hello".capitalize 

# Include 
puts "hello".include?("lo")

# Up case and Down case 
puts "hello".upcase 
puts "HELLO".downcase 

# Check if string is empty 
puts "".empty?

# Get length of string 
puts "hello".length

# Reverse the string 
puts "hello".reverse
```

*Results:*
```
Hello
true
HELLO
hello
true
5
olleh
```

### Substring
```ruby 
x = "ABCDEF"
puts x[2..4]

```

*Results:* `CDE`
### Split character by delimieter 
```ruby 
x = "abcdef-e-ef-"
p x.split("")
p x.split("-")

```

*Results:*
```
["a", "b", "c", "d", "e", "f", "-", "e", "-", "e", "f", "-"]
["abcdef", "e", "ef"]
```
### Strip the character 
`strip!` will return nil if there is nothing while `strip` return empty string
```ruby 
x = "             abc asdasd \n"
p x.strip!
y = ""
p y.strip
p y.strip!
```

*Results:*
```
"abc asdasd"
""
nil
```

### Convert other objects to strings 
> Remember, everything in Ruby is object 
```ruby
puts 5.to_s 

puts nil.to_s 

puts :symbol.to_s
```

*Results:*
```
5

symbol
```

## Symbols 
Strings can be changed, so every time a string is used, Ruby has to store it in memory even if an existing string with the same value already exists. Symbols, on the other hand, are stored in memory only once, making them faster in certain situations.

One common application where symbols are preferred over strings are the keys in hashes.

Let's have an example for the above statement 

```ruby
# object_id return an integer identifier

puts "string"=="string"

# For strings
puts "string".object_id == "string".object_id

# For symbols
puts :string.object_id == :string.object_id

```

*Results:*
```
true
false
true
```

## Boolean
There are 3 values:
- true: something is true 
- false: something is false
- nil: represents "nothing"

## Arrays
### Array set operations
```ruby 
x = [1,1,2,4]
y = [1,2,2,2]

# Intersection
p x & y

# Union 
p x|y

# Difference 
p x - y
```

*Results:*
```
[1, 2]
[1, 2, 4]
[4]
```

## Range 
> Read more at [Range from ruby docs](https://ruby-doc.org/core-2.5.1/Range.html) 

To generate an array with numbers in range we can use `to_a`!
```ruby
p (2..5).to_a
```

*Results:* `[2, 3, 4, 5]`
