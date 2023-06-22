# Loops 
## Loop 
The `loop` loop is Ruby's loop that just won't quit, an infinite loop unless we request it to stop. 

```ruby 
i = 0
loop do
  puts "i is #{i}"
  i += 1
  break if i == 10
end

```

*Results:*
```
i is 0
i is 1
i is 2
i is 3
i is 4
i is 5
i is 6
i is 7
i is 8
i is 9
```

## While Loop 
Similar to `loop`, except we declare the stop condition 
```ruby 
i = 0
while i < 10 do
 puts "i is #{i}"
 i += 1
end
```

## Until Loop 
The opposite of `while` loop. A while loop continues for as long as the condition is true, whereas an until loop continues for as long as the condition is false

```ruby 
i = 0
until i >= 10 do
 puts "i is #{i}"
 i += 1
end
```

*Results:*
```
i is 0
i is 1
i is 2
i is 3
i is 4
i is 5
i is 6
i is 7
i is 8
i is 9
```

## Ranges 
What if we know exactly how many times we want our loop to run? Ruby lets us use something called a range to define an interval. All we need to do is give Ruby the starting value, the ending value, and whether we want the range to be inclusive or exclusive.

```ruby 
puts (1..5) # inclusive range 
puts (1...5) # exclusive range 
puts ('a'..'d')
```

*Results:*
```
1..5
1...5
a..d
```
## For Loop 
A for loop is used to iterate through a collection of information such as an array or range.

```ruby 
for i in 0..5
  puts "#{i} zombies incoming!"
end
```

## Times Loop 
If you need to run a loop for a specified number of times, then look no further than the trusty #times loop.

```ruby 
5.times do
  puts "Hello, world!"
end
```

## Upto and Downto Loops 
```ruby 
5.upto(10) {|num| print "#{num} " }     #=> 5 6 7 8 9 10
puts ""
10.downto(5) {|num| print "#{num} " }   #=> 10 9 8 7 6 5
```

*Results:*
```
5 6 7 8 9 10 
10 9 8 7 6 5 
```
