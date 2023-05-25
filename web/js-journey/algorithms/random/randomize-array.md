# Randomize Array 
A common task that you will come across in your daily life is randomizing data. For example, when you spawning the items in the Snake game, rate of rare monster will appear or more casual, when you schedule the daily tasks for your employee.

Some algorithms can use randomness to prevent the worst-case situtation. For example, quick sort usually performs well but it becomes slow if the array is already sorted. One way to solve this problem is to randomize the array before starting to sort. But will it takes time to decrease the overall performance ? 

We can use an O(n) random algorithm combining with quick sort, at the end of the day, the overall time complexity still be the time complexity of quick sort.

```
RandomizeArray(String: array[])
  Integer: max_i = <Upper bound of array>
  For i = 0 to max_i - 1
    // Pick the item for position i in the array
    Integer: j = <pseudorandom number between i and max_i inclusive>
    <Swap the values of array[i] and array[j]>
  Next i
```

Time to implement this in `randomize-array.js`
