# Breadth First Search (BFS AKA Level Order Traversal)
## Definition
Instead of going until we counldn't and backtracking like DFS, we will go layer by layer of a tree (we are not talking about graph yet!)

That is the idea of **Breadth First Search**

Time complexity: **O(n)** 
## Tree Traversal
Unlike DFS, we shouldn't use recursion for implementing BFS. In order to remember the children of node, from which we will travel them before processing to next layer, we use a data structure called **queue**.

```ruby
class TreeNode
  attr_accessor :left, :right, :value

  def initialize(value)
    @value = value
    @left = nil
    @right = nil
  end

  def to_s
    "Node with value: #{@value}"
  end
end

class BST
  attr_accessor :root

  def initialize(value)
    @root = TreeNode.new(value)
  end

  def insert(root, value)
    return TreeNode.new(value) unless root

    if value > root.value
      root.right = insert(root.right, value)
    elsif value < root.value
      root.left = insert(root.left, value)
    end
    root
  end

  def min_value_node(root)
    curr = root
    curr = curr.left while curr&.left
    curr
  end

  def remove(root, value)
    return nil unless root

    if value > root.value
      root.right = remove(root.right, value)
    elsif value < root.value
      root.left = remove(root.left, value)
    elsif !root.left
      return root.right
    elsif !root.right
      return root.left
    else
      min = min_value_node(root.right).value
      root.value = min
      root.right = remove(root.right, min)
    end
    root
  end

  def BFS(root)
    return unless root

    queue = Queue.new 
    queue.push(root)
    level = 0 
    while queue.size > 0 
        puts "Level: #{level}"
        for i in 0..queue.size-1 
            curr = queue.pop
            puts curr
            queue.push(curr.left) if curr.left
            queue.push(curr.right) if curr.right
        end
        level += 1
    end
  end


  def search(root, target)
    return false unless root

    if target > root.value
      search(root.right, target)
    elsif target < root.value
      search(root.left, target)
    else
      true
    end
  end
end

bst_tree = BST.new(4)
bst_tree.insert(bst_tree.root, 12)
bst_tree.insert(bst_tree.root, 6)
bst_tree.insert(bst_tree.root, 2)
bst_tree.insert(bst_tree.root, 0)
bst_tree.insert(bst_tree.root, 1)
puts "BFS: "
bst_tree.BFS(bst_tree.root)
```

*Results:*
```
BFS: 
Level: 0
Node with value: 4
Level: 1
Node with value: 2
Node with value: 12
Level: 2
Node with value: 0
Node with value: 6
Level: 3
Node with value: 1
```

