# Variables 
## Declaring a Variable 
To declare a variable simple specify the name and the value of that variable.

> Naming convetion: snake_case
```ruby 
age = 18 
cash = 10 
cash *= 2
puts age 
puts cash
```

*Results:*
```
18
20
```

## Variables are References 
The information you name with a variable is stored in memory on your computer, so a variable is effectively a reference or a pointer to that address in memory. This is important to know as it can sometimes be the cause of unexpected behavior from your code.

```ruby 
desired_location = "Barcelona"
johns_location = desired_location

puts desired_location  #=> "Barcelona"
puts johns_location    #=> "Barcelona"

johns_location.upcase! 


puts desired_location
puts johns_location
```

*Results:*
```
Barcelona
Barcelona
BARCELONA
BARCELONA
```

