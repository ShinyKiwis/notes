# Depth First Search (DFS)
## Definition
I will explain like we are 5 years old. 

Imagine we are in a big maze with lots of different paths to take, we don't know which path to take first. Just choose one and we follow it until we reach a deadend, then go back to where we started and try another path. We keep repeating this until we find the way out of the maze.

That is the idea of **Depth First Search** 

Time Complexity: **O(n)**, since we have to go through all nodes 
## Tree Traversal
I will use the implementation of the BST, and implement all the 3 orders:
- Inorder (L-N-R)
- Preorder (N-L-R)
- Postorder (L-R-N)

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

  def inorder(root)
    return unless root

    inorder(root.left)
    puts root
    inorder(root.right)
  end

  def preorder(root)
    return unless root

    puts root
    preorder(root.left)
    preorder(root.right)
  end

  def postorder(root)
    return unless root

    postorder(root.left)
    postorder(root.right)
    puts root
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
puts "Inorder: "
bst_tree.inorder(bst_tree.root)
puts "Preorder: "
bst_tree.preorder(bst_tree.root)
puts "Postorder: "
bst_tree.postorder(bst_tree.root)
```

*Results:*
```
Inorder: 
Node with value: 0
Node with value: 1
Node with value: 2
Node with value: 4
Node with value: 6
Node with value: 12
Preorder: 
Node with value: 4
Node with value: 2
Node with value: 0
Node with value: 1
Node with value: 12
Node with value: 6
Postorder: 
Node with value: 1
Node with value: 0
Node with value: 2
Node with value: 6
Node with value: 12
Node with value: 4
```
