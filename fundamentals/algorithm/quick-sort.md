# Quick Sort 
## Idea 
Imagine, you have a collections of unordered books, you want to arrange them in alphabet order.

You will choose randomly one book as a **pivot**, from which you will divide all the books into 2 groups, one come before that pivot and one come after that pivot.

Then repeat the same thing for each of those two groups: pick new pivot, puts into 2 groups around that pivot until all the books are sorted.

That is the idea of **quick sort** 

Time complexity: **O(nlogn)** 

Space complexity: **O(1)** 

There are multiple ways to pick a pivot when applying quick sort.
- Right-most Value 
- Left-most Value 
- Middle one
## Implementation 
```ruby
arr = [0,2,1,3,12,23,4,9,8,7,3,-2,-5]
def quick_sort(arr, start_idx = 0, end_idx = arr.length-1)
    return if start_idx >= end_idx

    pivot = arr[end_idx]
    left = start_idx
    # Partition: elements smaller than pivot on left side 
    for i in start_idx..end_idx-1
        if arr[i] < pivot
            tmp = arr[left]
            arr[left] = arr[i]
            arr[i] = tmp 
            left += 1
        end
    end
    
    # Move pivot in-between left and right sides
    # Move pivot back to its final position
    arr[end_idx] = arr[left]
    arr[left] = pivot 

    quick_sort(arr, start_idx, left-1)
    quick_sort(arr, left+1, end_idx)
end
quick_sort(arr)
puts arr.inspect
```

*Results:* `[-5, -2, 0, 1, 2, 3, 3, 4, 7, 8, 9, 12, 23]`

