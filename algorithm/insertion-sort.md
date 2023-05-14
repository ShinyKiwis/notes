# Insertion Sort 
## Idea 
Imagine you are playing cards with numbers written on them, so we will put these cards in ascending order. 

Assumming first card is already sorted, we call this `sorted` pile, then second card will be compared with first card, arrange it. 

We keep going on to the end of the cards(array), more and more card will be added into the `sorterd` pile.

That is the idea of **insertion sort**.

Time Complexity: **O($n^2$)** 
## Implementation
```ruby 
arr = [0,2,1,3,12,23,4,9,8,7,3,-2,-5]

def insertion_sort(arr)
    for i in 1..(arr.length - 1)
         j = i-1 
         while j>=0 && arr[j+1] < arr[j]
            tmp = arr[j+1]
            arr[j+1] = arr[j]
            arr[j] = tmp
            j -=1
         end
    end
end
insertion_sort(arr)
p arr
```

*Results:* `[-5, -2, 0, 1, 2, 3, 3, 4, 7, 8, 9, 12, 23]`
