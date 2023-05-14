# Linked Lists 
## Definition
A linked list is a data structure that consits a sequence of nodes, where each node 
contains a value it hold and a reference (or pointer) to the next node in the sequence.

Unlike array, the memory is **not contiguous**, it use the reference to connect all nodes together.

Knowing the definition, you can easily try to use paper and see how all operators work :D. Let's have a look at the implementation of it using ruby.

```ruby 
class Node
  attr_accessor :next
  attr_reader :value

  def initialize(value)
    @value = value
    @next = nil
  end

  def to_s
    "Node with value: #{@value}"
  end
end

# For purpose of practicing class
# Linked List class will have following operations and all elements are unique
# append
# append_after
# delete
# find
class LinkedList
  def initialize
    @head = nil
  end

  def append(value)
    if @head
      temp = @head
      temp = temp.next while temp.next
      temp.next = Node.new(value)
    else
      @head = Node.new(value)
    end
  end

  def append_after(target, value)
    temp = find(target)
    unless temp
      puts 'Target not found'
      return
    end
    insert_node = Node.new(value)
    insert_node.next = temp.next
    temp.next = insert_node
  end

  def delete(value)
    if @head.value == value
      @head = @head.next
      return
    end
    temp = @head
    while temp
      break if temp.next.value == value

      temp = temp.next
    end
    temp.next = temp.next.next
  end

  def find(value)
    temp = @head
    return temp if temp.value == value
    return nil unless temp.next

    while (temp = temp.next)
      return temp if temp.value == value
    end

    nil
  end

  def print
    temp = @head
    while temp
      puts temp
      temp = temp.next
    end
  end
end

list = LinkedList.new
(1..10).each do |i|
  list.append(i)
end
list.print
list.delete(4)
20.times { print '-' }
puts ''
list.print
20.times { print '-' }
puts ''
list.append_after(3, 4)
list.append_after(10, 11)
list.print
```

*Results:*
```
Node with value: 1
Node with value: 2
Node with value: 3
Node with value: 4
Node with value: 5
Node with value: 6
Node with value: 7
Node with value: 8
Node with value: 9
Node with value: 10
--------------------
Node with value: 1
Node with value: 2
Node with value: 3
Node with value: 5
Node with value: 6
Node with value: 7
Node with value: 8
Node with value: 9
Node with value: 10
--------------------
Node with value: 1
Node with value: 2
Node with value: 3
Node with value: 4
Node with value: 5
Node with value: 6
Node with value: 7
Node with value: 8
Node with value: 9
Node with value: 10
Node with value: 11
```
