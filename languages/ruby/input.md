# Get user's input
## Input as a string
First of all, you can guess `gets` help us to receive input from the user. `chomp` will "chomp" off the `\n` of the input string.

> Due to the limitation of the plugin, don't try running this, it couldn't get data from user within nvim
```ruby
print "How old are you? "
# age = gets.chomp
age = 18
puts age
```

*Results:* `How old are you? 18`

## Input for mathematic operations
The input we received from user is in string type, but sometimes we need it as a number to do math with it. `to_i` will convert it to integer!
```ruby
print "Give me a number: "
# number = gets.chomp.to_i
number = 20
puts number 
```

*Results:* `Give me a number: 20`

As for other type will have the corresponding type such as `to_f` for example.

## Get input from outside the script, pass variables to a script
To extract the parameter pass to the script, we can use the `ARGV` constant!

```ruby
first, second, third = ARGV

puts "Your first variable is: #{first}"
puts "Your second variable is: #{second}"
puts "Your third variable is: #{third}"
```

Let's see how it run.
```bash
$ ruby ex.rb first 2nd 3rd
Your first variable is: first
Your second variable is: 2nd
Your third variable is: 3rd
```

If you have learnt other languages before, you often see that the first 2 variables are often:
- The command use to execute the script 
- The filename

But for Ruby, it doesn't work like that, the number start counting for your first parameter. This is neat!

However, there is one thing worth noticing, when using `ARGV`, `gets` function will no longer work, we need to specify explicitly where we are getting the user input from, in this case, it is from `STDIN` stream.
```ruby
name = $stdin.gets.chomp 
```
## Read from files
Reading files in Ruby is easier than you thought. 
```ruby
# We can't do filename = ARGV since we only have one element here, we have to do this
filename = ARGV.first 
txt = open(filename)
puts "Content of the file"
puts txt.read
# Don't forget to close the file 
txt.close
```

### Some functions to remember
- `close`: Close the file 
- `read`: Reads the content of the file 
- `readline`: Reads just one line of a text file 
- `truncate`: Empties the file. Becareful with this 
- `write('stuff')`: Write `'stuff'` to the file 
- `seek(0)`: Move the read/write location to the beginning of the file.
- `File.exist?(filename)`: Check if a file exist or not
