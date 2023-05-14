# Sorting General 
## Stable vs Unstable Sort 
In the context of sorting algorithm, a **stable sort** is a sorting algorithm that maintains 
the relative order of equal elements in the input array. 

In other words, if two elements in the input array have the same value, a stable sort will guarantee that the element that appears first in the input array will also appear first in the sorted output.

For example:
```ruby 
arr = [7a,3,7b]

# After sorting 
arr = [3, 7a ,7b]
```

Meanwhile, an **unstable sort**, on the other hand, does not guarantee that the relative order of equal elements will be preserved in the sorted output. In other words, if two elements in the input array have the same value, an unstable sort may swap their positions in the sorted output.

For example: 
```ruby 
arr = [7a,3,7b]

# After sorting, 7b and 7a swap their positions
arr = [3, 7b ,7a]
```
