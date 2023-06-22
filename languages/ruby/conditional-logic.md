# Conditional Logic 
> View the control-flow.md for more details 

## Syntax 
```ruby 
if attack_by_land == true
  puts "release the goat"
elsif attack_by_sea == true
  puts "release the shark"
else
  puts "release Kevin the octopus"
end
```

## Boolean Logic 
```ruby 
# Check both value type and actual vaue it holds 
puts 5.eql?(5.0)
puts 5.eql?(5)

# Checks whether both values are the exact same object in memory.
a = 5 
b = 5 
puts a.equal?(b)

a = "hi"
b = "hi"
puts a.equal?(b)
```

*Results:*
```
false
true
true
false
```

## Spaceship operator 
```ruby 
puts 5 <=> 10 
puts 10 <=> 10 
puts 10 <=> 5

```

*Results:*
```
-1
0
1
```

Here is how this operator works:
- `-1` if the value on the left is less than the value on the right
- `0` if the value on the left is equal to the value on the right
- `1` if the value on the left is greater than the value on the right

## Case Statements 
```ruby 
grade = 'F'

did_i_pass = case grade #=> create a variable `did_i_pass` and assign the result of a call to case with the variable grade passed in
  when 'A' then "Hell yeah!"
  when 'D' then "Don't tell your mother."
  else "'YOU SHALL NOT PASS!' -Gandalf"
end
puts did_i_pass

```

*Results:* `'YOU SHALL NOT PASS!' -Gandalf`

## Unless Statements
```ruby 
age = 19
puts "Welcome to a life of debt." unless age < 18

unless age < 18
  puts "Down with that sort of thing."
else
  puts "Careful now!"
end

```

*Results:*
```
Welcome to a life of debt.
Down with that sort of thing.
```


