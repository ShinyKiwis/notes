# Merge Sort
## Idea 
Take the original array and split into 2 **almost equal** halves, repeat that splitting into halves until we couldn't do it anymore. 
In other words, we break arrays into multiple individuals or we can say we break the problem (sorting), into smaller similiar problem(also sorting) but in smaller size. We are applying the technique called **Divide and Conquer** . 

At that moment, when we have multiple array of size 1, we can say they are sorted! We will now try to **merge** them for some order following the order we want them to be (ascending, descending).

So for this algorithm, there are 2 steps:
- Spliting into halves 
- Merge them

That is the idea of **merge sort** 

Time complexity:  **O(nlogn)** 

Space complexity: **O(n)** 
## Implementation
```ruby 
arr = [0,2,1,3,12,23,4,9,8,7,3,-2,-5]
def merge_sort(arr) 
    # Base case: there is only 1 element in the array (individuals)
    return arr if arr.size <= 1

    mid = arr.size / 2 
    left = arr[0...mid]
    right = arr[mid...arr.size]
    # Splitting into 2 halves
    left = merge_sort(left)
    right = merge_sort(right)

    merge(left,right)
end

def merge(left, right)
    result = []
    # i and j are 2 pointers to keep track of the halves
    i = 0 
    j = 0
    while i <left.size && j < right.size 
        if left[i] <= right[j]
            result << left[i]
            i+=1 
        else 
            result << right[j]
            j+=1
        end
    end

    # Add rest element of left and right to the result 
    while i<left.size 
        result << left[i]
        i+=1 
    end

    while j<right.size 
        result << right[j]
        j+=1 
    end 

    result
end

p merge_sort(arr)
```

*Results:* `[-5, -2, 0, 1, 2, 3, 3, 4, 7, 8, 9, 12, 23]`

## Explain the time complexity
