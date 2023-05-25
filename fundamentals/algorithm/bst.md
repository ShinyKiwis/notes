# Binary Search Tree 
## Definition 
A binary search tree (BST) is a data structure used for organizing a collection of elements in a way that allows for efficient search, insertion, and deletion operations. A BST is a binary tree where each node has at most two children (left and right), and the value of each node is greater than or equal to all the values in its left subtree, and less than or equal to all the values in its right subtree.

This ordering property of a BST ensures that elements can be efficiently located and retrieved by performing a binary search on the tree.
## Implementation
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
bst_tree.remove(bst_tree.root, 2)
puts bst_tree.min_value_node(bst_tree.root).value
puts bst_tree.search(bst_tree.root, 2)
```

*Results:*
```
0
false
```
