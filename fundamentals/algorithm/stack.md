# Stacks 
## Definition
Stack is a data structure that store elements following an order of **Last-In, First-Out (LIFO)**, which means that the last element added to the stack will be the first element removed from the stack. 

It can be implemented using dynamic arrays.

There are 3 basics operations
- Push 
- Pop 
- Peek/Top

So that's it for stack, if you know how to push something to the dynamic array it works the same for the stack since stack can be implemented with dynamic arrays. 

But let's see how to implement stack not using array in ruby. 

```ruby 
class Node
  attr_accessor :next
  attr_reader :value

  def initialize(value)
    @value = value
    @next = nil
  end

  def to_s
    "A node value with: #{@value}"
  end
end

class Stack
  @@size = 0
  def initialize
    @top = nil
  end

  def push(value)
    if @top
      temp = @top
      @top = Node.new(value)
      @top.next = temp
    else
      @top = Node.new(value)
    end
    @@size += 1
  end

  def pop
    return unless @@size

    @top = @top.next
  end

  def peek
    @top
  end
end

stack = Stack.new
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

puts stack.peek
stack.pop
puts stack.peek
```

*Results:*
```
A node value with: 4
A node value with: 3
```
