# Functions
## Create function and receive parameters
Functions in Ruby are declared with `def` and end the scope of it with `end`.
```ruby
def introduce(name)
  puts "My name is #{name}"
end

introduce("Nguyen")
```

*Results:* `My name is Nguyen`

## Pass multiple functions and extract it 
If you have learnt React before, this works like `props` object.
```ruby
def get_parameters(*args)
  first, second = args 
  puts first
  puts second
end

get_parameters("meo", "miu")
```

*Results:*
```
meo
miu
```

## Return a value from function 
Just like other language use `return` keyword
