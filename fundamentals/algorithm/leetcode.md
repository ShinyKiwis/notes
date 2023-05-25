# Scratchpad 
> Numbers are problem ID on LeetCode
## Strategy
### 1 
> https://leetcode.com/problems/two-sum/description/
**Solution 1** 

Since the output requires the original indices of the result => **Can't use sort technique** 

Using **Brute Force**, to find all possible pair of result from the beginning of the array to the end. 

Space Complexity: **O(1)**

Time Complexity: **O($n^2$)** 

**Solution 2**

We will use a tecnique call **one pass**, we will read array once to create a **Hash Map** and find the number we need, welp **O(1)** for searching mate.   

The Hash Map will have val as the key and its index for the value!

Time Complexity: **O(n)**

Space Complexity: **O(n)** 

### 49
> https://leetcode.com/problems/group-anagrams/

**Solution** 
 
 The solution is using **Hash Map**, where the key is the array of how many character the string contains and the value is the list of the anagram. 

 For example:
 ```bash
"bat", "tab"
 A single array of 26 characters will be the same:
 1 - b 
 1 - a 
 1 - t
 ```
We should be flexible when using hash data structure.

### 217 

### 226 
> https://leetcode.com/problems/invert-binary-tree/

This problem is quite easy, review how to invert a binary tree. 


### 238 
> https://leetcode.com/problems/product-of-array-except-self/

**Solution 1** 

We can calculate all suffix and prefix values before starting to calculate the result output. Let's have an example. 

```
nums = [1,2,3,4]

=> prefix = [1,2,6,24]
prefix[0] = nums[0] 
prefix[1] = prefix[0] * nums[1]
prefix[2] = prefix[1] * nums[2]
and so on 

=> suffix = [24,24,12,4]
suffix[3] = nums[3]
suffix[2] = suffix[3] * nums[2]
suffix[1] = suffix[2] * nums[1] 
and so on 

So at the end the result will be 
if the index is 0 => prefix of first number will be 1 
if the index is nums.length -1 => suffix of last number will be 1 

value = prefix[i-1] * suffix[i+1]
```

Time Complexity: **O(n)**

Space Complexity: **O(n)** 

**Solution 2** 

Instead of storing the number of prefix and suffix in 2 differents array, we store it in the ouput array. This is harder to imagine to be honest.

Time Complexity: **O(n)**

Space Complexity: **O(1)**, We dont' count the output array

### 242 
>https://leetcode.com/problems/valid-anagram/

**Solution 1**

Count frequency of characters in both strings(s,t) using **Hash Map** 

Space Complexity: Need memory to create 2 Hash Map size s and size t => **O(s+t)** 

Time Complexity: **O(s+t)** 

**Solution 2** 

Sort the string to have same order and compare it with `==` operator

Space Complexity: **O(1)** - Depends on the sort algorithm

Time Complexity: **O(nlogn)** - Depends on the sort algorithm

### 347
> https://leetcode.com/problems/top-k-frequent-elements/

**Solution 1**

Using a hash map to count the frequency of numbers, extract them into an array and sort it based on the value, then create a new array containing only the top `k` numbers using the `key` only. Finally return a slice of that array. 

Although this approach pass all the testcases, but it is not efficient!

**Solution 2** 

Again using hash map to count the frequency of numbers, then instead of sorting the keys basing on value, we will use **max heap** , to pick only k elements. 

Time Complexity: **O(klogn)** 

**Solution 3** 

Again using hash map for same purpose, then using something like bucket sort, the indices will be the frequency of the number appeared, and the values is the list of numbers have that frequency. 

Simply iterate through it and get top `k` values 

Time Complexity: **O(n)** 

## Notes
**C** 
- Compare 2 arrays with stringify

**M**
- Max Heap

**H** 
- Hash Set 
- Hash Map
