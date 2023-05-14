# Arrays 
## Definition 
An array is a data structure that stores a collection of values of the same type. 
These values are stored in a contiguous block of memory and can be accessed using an index 
or a subscript.

Let's see what does it mean to say **contiguous memory**. 

Assume we have an array `[1,3,5]` and the start address of the array is `$0`

So in RAM, we will have something like this:

**RAM** 

| Value     | 1    | 3    | 5    |
|---------------- | --------------- | --------------- | --------------- |
| Address    | $0    | $4    | $8    |

Since for most of languages, to store an integer requires **4 bytes**, so if the first address is `$0`, the next one will be `$4`. 

There are 3 basics operations of the array:
- Read
- Write
- Search

## Static Arrays (Fixed-size Arrays)
### Read Operation
When accessing an element in array, we don't use the actual address but instead we will use the index of that element, most of languages have their first index as `0` instead of `1`.

In order to know which address, we will use something call `access function` to calculate the actual address.

Example:

```ruby 
arr = [1,2,3]

puts arr[0]

```

*Results:* `1`

### Write Operation
For static array, there is one important characteristic of it to remember: 

**The size is FIXED** 

That means we can't add more array in to a static array, the size is fixed. What is the address of new element ? If it is somewhere, then it is no longer **contiguous**. But what happen if the next address is already occupied by the OS ? 

=> **This is the limitation of the static array.**

When saying writing to the static array, we are just actually change the value of the memory slot at that specific index. (**O(1)**)

However, in case we want to insert into the beginning of an array when other indices are filled, we have to **shift** all of the values. (**O(n)**)

The same goes with deletion, we may need to do some shiftment in the array.

## Dynamic Arrays 
Dynamic means the size can be changed!

### Read Operation
Reading the dynamic array is the same with static array, accessing by index. 

### Write Operation 
In case the size is no longer enough to store more values, we will simply create a new array with more capacity then copy all the old values and finally, most important one, **deallocate** the old array (If the language doesn't do this automatically)

If we forget to release the memory, this is the definition of **memory leak** 

## Time Complexity 
| Operation    | Time complexity     |
|--------------- | --------------- |
| Access      | O(1)   |
| Search      | O(n)   |
| Insertion   | O(n)   |
| Deletion    | O(n)   |

