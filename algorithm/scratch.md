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
## Notes
**C** 
- Compare 2 arrays with stringify

**H** 
- Hash Set 
- Hash Map
