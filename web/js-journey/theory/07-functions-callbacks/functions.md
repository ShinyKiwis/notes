**Table of contents** 
${toc}
# Functions 
## Why we need function ?
Without function, for a specific feature like squaring a number like 1,5,120,25, we have to create code for it multiple times. Welp, that is just a simple feature but for more complex feature, imagine how messy our code will be.

Repeating the code multiple times make us violate the DRY principle or Don't Repeat Yourself.

So why don't we turn that feature in to a function and receive a input (for square feature), or in other words, generalize the function.
## Generalize the functions 
We generalize function to simple make it **reusable**.

Creating parameters (placeholders) mean we don't need to decide what data to run our funcitonality on until we run the function. Then we will provide an actual value (argument) when we run the function.

Higher order functions follow this same principle. We may not want to decide exactly what some of our functionality is until we run our function.
## Repeating Functionality
In this section, we will review how to run JavaScript code with the following code snippet:

```javascript 
function copyArrayAndMultiplyBy2(array){
    const output = []
    for(let i=0;i<array.length;i++){
        output.push(array[i]*2)
    }
    return output
}

const myArray = [1,2,3]
const result = copyArrayAndMultiplyBy2(myArray)
```

| Code                                         | Global Memory                  |
|----------------------------------------------|--------------------------------|
| Line 1: function copyArrayAndMultiplyBy2.... | copyArrayAndMultiplyBy2: ->F-> |
| Line 9: const myArray = [1,2,3]              | myArray: [1,2,3]               |
| Line 10: const result = ...                  | result: uninitialized          |

For `copyArrayAndMultiplyBy2`, we have a **function execution context**:

| Code                      | Local Memory     |
|---------------------------|------------------|
| Before first line         | array: [1,2,3]   |
| Line 1: const output = [] | output = []      |
| After for loop            | output = [2,4,6] |
| Return                    |                  |

The global memory now is:

| Global Memory                  |
|--------------------------------|
| copyArrayAndMultiplyBy2: ->F-> |
| myArray: [1,2,3]               |
| result: [2,4,6]                |

Do you feel we are missing something ?

> What about call stack ?

But what if we want a function that have functionality of dividing each elemnt by 2 or even add 3 to all element, so on. What principle are we breaking ?

> DRY - Don't Repeat Yourself!

# Higher Order Functions 
## Example
Let's step up a further step, what if we can pass the functionality we want as a second argument ?

```javascript
function copyArrayAndManipulate(array, instruction) {
    const output = []
    for(let i=0;i<array.length;i++){
        output.push(instruction(array[i]))
    }
    return output
}
function multiplyBy2(input) { return input * 2}
const result = copyArrayAndManipulate([1,2,3], multiplyBy2)
```

Can you try to run this code ? 

> I am so lazy to type them all again :D

However, I have one important question for you! Why we need a constant `output` inside the function, why don't we just modify the global data ? 

> To prevent the side effect, so the global array stays unmutated and stays unchanged. What if we just want to use the array and modify it INSIDE the function but the data is not mutated ?
## How was this possible ?
In JavaScript:

**Functions is first class objects** 

So it means, they can co-exist with and can be treated like any other JavaScript objects:
1. Assigned to variables and properties of other objects
2. Passed as arguments into functions 
3. Returned as values from functions

```javascript
function copyArrayAndManipulate(array, instruction) {
    const output = []
    for(let i=0;i<array.length;i++){
        output.push(instruction(array[i]))
    }
    return output
}
function multiplyBy2(input) { return input * 2}
const result = copyArrayAndManipulate([1,2,3], multiplyBy2)
```

For that code snippet, which is higher order function and which is callback function ?

- Higher order function: `copyArrayAndManipulate`
- Callback: `multiplyBy2`

## Definition
So what exactly is a higher order function ? 

Higher order function is a function that takes in a function (as argument) or passes out a function as output.

That's it.

Here are the advantages of them:

- Declarative readable code: `map`, `filter`, `reduce` - the most readable way to write code to work with data 
- Interview Prep: mid/senior level job interviews 
- Asynchronous JavaScript: Callbacks are a core aspect of async JavaScript, and are under-the-hood of promises, async/await

# Arrow Functions 
Arrow function is just a shorthand way  to save functions.

Let's have an example (just remember, function is just an object in JavaScript):

```javascript 
function multiplyBy2(input) { return input * 2 }
const multiplyBy2 = (input) => { return input*2 }
const multiplyBy2 = (input) => input*2 
const multiplyBy2 = input => input*2
```

Let's do some exercises, shall we ? 

> Open the file named **callbacks.js** in exercises folder and start working on it.

