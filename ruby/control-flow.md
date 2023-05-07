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

## Assignment syntax in condition bodies and tests 
Consider the following code block:
```ruby
if x = 1
    y = 2
end 

puts x 
puts y
```
Ruby doesn’t draw as clear a line as compiled languages do between “compile time” and “runtime,” but the interpreter does parse your code before running it, and certain decisions are made during that process. An important one is the recognition and allocation of local variables. 

So when Ruby see `x=1`, it allocates space for a local variable called `x`. One thing worth remember is that the creation of the variable—not the assignment of a value to it, but the internal creation of a variable—always takes place as a result of this kind of expression, even if the code isn’t executed! 

Another example:
```ruby
if false 
    x = 1 
end 
puts x 
puts y 
```
The assignment to x isn’t executed, because it’s wrapped in a failing conditional test. 

But the Ruby parser sees the sequence x = 1, from which it deduces that the program involves a local variable x. The parser doesn’t care whether x is ever assigned a value. Its job is just to scour the code for local variables for which space needs to be allocated.

None of this happens with class, instance, or global variables. All three of those variable types are recognizable by their appearance (@@x, @x, $x).

For the first codeblock, we make an assignment inside if statement test, why we should do that ?

Sometimes it’s handy to do the assigning and testing at the same time, particularly when you’re using a method that returns nil on failure and some other value on success.ometimes it’s handy to do the assigning and testing at the same time, particularly when you’re using a method that returns nil on failure and some other value on success.

## Case statements
```ruby
def quit_or_not 
    print "Exit the program ?"
    answer = gets.chomp 
    case answer 
    when "y", "yes"
        puts "Goodbye!"
        exit 
    when "n", "no"
        puts "OK, we will continue"
    else 
        puts "Invalid answer"
    end
    puts "continuing"
    quit_or_not 
end 
quit_or_not
```
### How when works ?
Ruby has a concrete definition of `match` when it comes to `when` statements

Every Ruby object has a case equality method called === (three equal signs, sometimes called the case subsumption or threequal operator). The outcome of calling the === method determines whether a when clause has matched.

Let's have a deeper look!

The `===` is infix-operator, is realy a synctatic sugar for a method call: 

````ruby
if "yes".===(answer)
````

The `when` statement wraps that method call in yet more sugar, we don't have to use that explicitly in either operator or method position. It's done for us!

One thing to note!

> "yes" and "no" are on the left and `answer` on the right. 
> In a case statement, the object that comes after when is the receiver of the threequal method, and the object that comes after case is the argument.
> This is important for instances where `a.===(b)` is true but `b.===(a)` is false. 

### What is the return value of case statement ? 
Similiar to if statement, If there’s a successful when or else clause, the return value of the entire case statement is the value returned by the code in that clause. Otherwise, if the case statement fails to find a match, the entire statement evaluates to nil.

## Unconditional looping with the loop method 
Syntax:
```ruby
// These 2 are equivalent
loop { puts 'Looping forever' }
loop do 
    puts 'Looping forever'
end
```

## Conditional looping with while/until method 
Syntax:
```ruby
while true 
    // something 
end

//or puts while at the end 
begin 
    //something 
end while true
```

### until keyword 
The until keyword is used the same way as while but with reverse logic.
```ruby
n = 1 
until n>10
    puts n 
    n = n + 1
end
```

## Looping based on list of values 
```ruby
data = [1,2,3,4,5,6,7]

for number in data 
    puts number
end
```

## Iteration and codeblocks
