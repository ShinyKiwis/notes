# Printing, Printing
## How to print something ?
Simply use `puts` to print something.

```ruby
puts 'Hello, World!'

```

*Results:* `Hello, World!`

## How to use string interpolation ?
Simple use `#{variable_name or expression}` inside `""` not `''`

```ruby
name = 'ruby'
puts "I love #{name} language."
```

*Results:* `I love ruby language.`

### Differences between `""` and `''`
In Ruby, the double-quore `"` rells Ruby to replace variables it finds with `#{}`, but the single-quote `'` tells Ruby to leave the string alone and ignore any variables inside it.

## Format String
Let's have a look at an example:
```ruby
formatter = "%{first} %{second} %{third} %{fourth}"
puts formatter % {first: 1, second: 2, third: 3, fourth: 4}
```

*Results:* `1 2 3 4`

### Differences between `#{}` and `%{}`
- `#{}`: is used for string interpolation, which means that it allows you to embed the result of an expression within a string. When you use #{} within a string literal, the expression within the braces is evaluated and its result is included in the string.

fruits = %w{"apples", "bananas", "mangos"}
- `%{}`: is used for string formatting, which means that it allows you to create a string with placeholders that can be replaced with values. You can use different delimiters with %{} to create different types of strings, such as arrays or double-quoted strings.
  - `%w{}`: create an array 
  - `%Q{}`: create a double quote string
  - `%q{}`: create a single quote string

```ruby
fruits = %w{"apples", "bananas", "mangos"}
puts fruits
```

*Results:*
```
"apples",
"bananas",
"mangos"
```




