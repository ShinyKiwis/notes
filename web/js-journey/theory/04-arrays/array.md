# Array
## Theory
In JavaScript, arrays aren't primitives but are instead `Array` object with following core characteristics:
- They are resizable and can contain a mix of different data type (Yep, this is not the array you know)
- They are not associative arrays, array elements can access using nonnegative integers 
- They are zero-indexed
- array-copy operations create shallow copies

## Shallow copy vs Deep copy
### Shallow copy
A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too and so, you may end up unintentionally causing changes to the source or copy that you don't expect.
### Deep copy
A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too; that is, you won't unintentionally be causing changes to the source or copy that you don't expect.

So let's have a look at an example of this at file `copy.js`

```javascript 
const fruits = ['strawberry', 'mango', 'apple', 'grapes']

const fruitsCopy = [...fruits]

fruitsCopy.push("pear")
fruitsCopy.push("oranges")

console.log(fruits)
console.log(fruitsCopy)
```

*Results:*
```
[ 'strawberry', 'mango', 'apple', 'grapes' ]
[ 'strawberry', 'mango', 'apple', 'grapes', 'pear', 'oranges' ]
```

I have extract the code from the file to explain why the modification of copy array doesn't affect the original one!
For the case of `fruits` array, it contains multiple primitive values, since primitive values are immutable. When you create a copy of an array that contains primitive values using the spread operator, the values in the original array are also copied by value. This means that a copy of each value in the original array is made and placed into the new array. Since each value is copied by value, any changes made to the values in the copied array do not affect the original array.

What about array of objects ?

```javascript
const array_of_objects = [{name: 'meo'}, {name: 'dem'}]

const copy = [...array_of_objects]
// Create new object here
copy[0] = {name: 'YAY'}

console.log(copy)
console.log(array_of_objects)

copy[0].name = "zen"
console.log(copy)
console.log(array_of_objects)
```

*Results:*
```
[ { name: 'YAY' }, { name: 'dem' } ]
[ { name: 'meo' }, { name: 'dem' } ]
[ { name: 'zen' }, { name: 'dem' } ]
[ { name: 'meo' }, { name: 'dem' } ]
```

As you see changing the first object by assigning a new one doesn't affect the original array, because it is a new object not the old one. That is why changing the property `name` won't affect the original array also. That is simply because they are not **referecing** to the same object anymore.

But if we change the property name of the second element, it will affect the original array
```javascript
copy[1].name = 'tes'
console.log(copy)
console.log(array_of_objects)
```

Searching this shallow copy and deep copy on the internet, you will see different answer. But following the MDN document, you can create a deep copy only using `JSON.stringy` and `JSON.parse`.

```javascript
let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];
let ingredients_list_deepcopy = JSON.parse(JSON.stringify(ingredients_list));

// Change the value of the 'list' property in ingredients_list_deepcopy.
ingredients_list_deepcopy[1].list = ["rice flour", "water"];
// The 'list' property does not change in ingredients_list.
console.log(ingredients_list[1].list);
// Array(3) [ "eggs", "flour", "water" ]
```

*Results:* `[ 'eggs', 'flour', 'water' ]`

### Copying methods and mutating methods
> This section reviews what we have discussed above

Some methods do not mutate the existing array that the method was called on, but instead return a new array. They do so by first accessing this.constructor[Symbol.species] to determine the constructor to use for the new array. The newly constructed array is then populated with elements. The copy always happens shallowly — the method never copies anything beyond the initially created array. Elements of the original array(s) are copied into the new array as follows:
- Objects: the object reference is copied into the new array. Both the original and new array refer to the same object. That is, if a referenced object is modified, the changes are visible to both the new and original arrays.
- Primitive types such as strings, numbers and booleans (not `String`, `Number`, and `Boolean` objects): their values are copied into the new array.

## Methods
There are a lot of operations on `Array` object in JavaScript, listing them here is not a good idea for learning, go do some exercises and see how to use them. Visit online platform for practices such as:
- Codewar
- Hackerank
- Leetcode

## Mutability 
> This section is my notes for https://frontendmasters.com/courses/javascript-first-steps/mutability/

Let's see what happen with following snippet:
```javascript
{
const abcArray = ['a','b', 'c']
abcArray[1] = 'd'
console.log(abcArray) // ['a', 'd', 'c']
}

const abcArray = ['a','b', 'c']
abcArray[1] = 'd'
console.log(abcArray)

const abcString = 'abc'
abcString[1] = 'd'
console.log(abcString) // 'abc'
```

*Results:*
```
[ 'a', 'd', 'c' ]
[ 'a', 'd', 'c' ]
abc
```

Run the code, you will see that the modification in string won't do anything, because:
- "Mutable" can be edited such as array 
- "Immutable" can always stay the same, (remember primitive values are immutable ?)

Aha, enough of theory, you must be sleepy now. 
Question: Are these two operation the same ? Explain your answer.
>Woo challenge :D 
```javascript
const numbers1 = [1,2,3]
numbers1.push(4)

const numbers2 = [1,2,3]
const result2 = numbers2.concat([4])
```

Although the final result is an array with 4 elements `[1,2,3,4]`, but they are not the same.
- Some actions mutate an array in place (`push`)
- Others do not mutate but instead create a new copy (`concat`). Wanna guess the copy is deep copy or shallow copy ?

Question: What happened ?
```javascript
const a = [1,2,3]
const b = a
b.push(4)
console.log(a) // [1,2,3,4]
console.log(b) // [1,2,3,4]
```
Underlying, both of them are referecing to same `Array` object, this is a shallow copy.

## Immutable variable with mutable value 
> Don't you wonder why we declare array with const but still be able to mutate it huh ?

The reason is very simple, the `const` meaning that we declaring a variable that can't be reassigned to anything except what is was "linked" to at the initialization. While the array is mutable, so we can freely mutate it without breaking the "link" of the `const`.

```javascript
const operands = [0,6]
const sum = operands[0] + operands[1] // 6 
operands[0] = 5
const newsum = operands[0] + operands[1] // 11
```
