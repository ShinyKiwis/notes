# Special Operators 
## `..` and `...` operators
Both of them are range operators that create a range of values. 

The `..` operator creates an **inclusive**  range of values.

For example:
```ruby
p (1..5).to_a
```

*Results:* `[1, 2, 3, 4, 5]`

The `...` operators creates an **exclusive** range of values. 

For example: 
```ruby 
p (1...5).to_a
```

*Results:* `[1, 2, 3, 4]`
