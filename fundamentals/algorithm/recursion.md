# Recursions
## Definition 
In computer science, recursion is a programming technique where a function calls itself to solve a problem. Recursion can be classified into two types: one branch recursion and two branches recursion.

## One branch Recursion
It is also known as linear recursion, occurs when a function calls itself only once in each recursive call. This means that the function has only one recursive case, where it solves a smaller version of the same problem, and one base case, where it returns a result without calling itself again. 

Let's have an example of calculating factorial 

```ruby 
def factorial(n)
    if n<=1 
        return 1
    end
    return n * factorial(n-1)
end

puts factorial(5)
```

*Results:* `120`

## Two branches Recursion
Two branches recursion, also known as binary recursion, occurs when a function calls itself twice in each recursive call. This means that the function has two recursive cases, where it solves two smaller versions of the same problem, and one base case, where it returns a result without calling itself again, 

Let's have an example of calculation fibonacci numbers 

```ruby 
def fibonacci(n)
    if n<=1 
        return n 
    end 
    return fibonacci(n-1) + fibonacci(n-2)
end
puts fibonacci(5)
```

*Results:* `5`
