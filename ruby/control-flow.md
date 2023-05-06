# Control Flow 
Ruby's control-flow techniques include:
- Conditional execution: Execution depends on the truth of an expression
- Looping: A single segment of code that is executed repeatedly 
- Iteration: A call to a method is supplemented with a segment of code that the method can call one or more times during its own execution. 
- Exceptions: Error conditions are handled by special control-flow rules

## Conditional Execution 
> Most of this note contains the syntax of the language

```ruby
x = 15
if x > 10 
    puts x 
end

// one line 
if x>10 then puts x end 

// else and elsif 
if x > 10 
    // something 
elsif x < 10 
    // something 
else 
    // finally something 
end
```

Special keyword for `if not`, `unless`
```ruby
unless x > 100 
    puts 'Small number'
else 
    puts 'Big number'
end
```

### Contional Modifiers
```ruby
puts "Big number!" if x > 100 
puts "Big number!" unless x<=100

```

### Value of if statement
Remember the following rules:
- If the if statment succeeds, return what was executed 
- If the if statment failed, return `nil`


