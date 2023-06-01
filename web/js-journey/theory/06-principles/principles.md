**Table of contents** 
${toc}
# JavaScript Principles 
This is notes from a course called "JavaScript: The Hard Parts" on FrontendMasters.

Link to the slides of the courses:
- [Slides](https://static.frontendmasters.com/resources/2019-09-18-javascript-hard-parts-v2/javascript-hard-parts-v2.pdf) 
## Thread of Execution
When JavaScript code runs, it does 2 things:
- Goes through the code line by line and runs/executes each line - known as **the thread of execution** 
- Saves 'data' like strings and arrays so we can use that data later (even functions) - in its memory

Let's consider the following code 

```javascript 
const num = 3;
function multiplyBy2(inputNumber) {
    const result = inputNumber*2;
    return result; 
}

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);
```

| Code                                    | Memory                |
|-----------------------------------------|-----------------------|
| Line 1: const num = 3;                  | num: 3                |
| Line 2: function multiplyBy2()...       | multiplyBy2: ->F->    |
| Line 7: const output = multiplyBy2(num) | output: uninitialized |

For the value of **multiplyBy2**, "->F->" stands for the code of the function. 

For the output **constant**, we may say that output should be initialize to **undefined**, before the function runs and return some value. However, doing that will violate the meaning of being a constant.

So now, that function code is JavaScript code, so to runs it we need two things:
- Thread of Execution
- Save data to memory whatever shows up while we're inside that function

Running that function, can be viewed as a **mini program.** So does two things together create a brand new **Execution Context**.

## Execution Context 
Code we save ('define') function and can use (call/invoke/run) later with the function's name and () (Have you wonder why JavaScript knows if something is a function call ?).

In this case it is known as **Function Execution Context** and the global scope is known as **Global Execution Context**.

The **Execution Context** created to run the code of a function, has 2 parts:
- Thread of Execution
- Memory

Let's run the `multiplyBy2` function, pay attention at how we use **Local Memory** instead of **Memory**.


| Code                       | Local Memory    |
|----------------------------|-----------------|
| Before running line 1      | inputNumber: 3  |
| Line 1: const result = ... | result: 3*2 = 6 |
| Final line: return result  |                 |

Alright, small wake-up question, for `inputNumber:3`, what is the name for `inputNumber` and `3` ?
- `inputNumber`: parameter
- `3`: argument

What happen at final line, `return result` ?
It does 3 things:
- Evaluate the return expression, if a variable try to get its value from the memory (Local->Global)
- Stop the execution of the function
-  Execution resumes at where the function was called (*)

So let's get back to our main program.

| Code                              | Memory                   |
|-----------------------------------|--------------------------|
| Line 1: const num = 3;            | num: 3                   |
| Line 2: function multiplyBy2()... | multiplyBy2: ->F->       |
| Line 7: const output = 6          | output: 6                |
| Line 8: const newOutput = ...     | newOutput: uninitialized |

The execution runs again for `newOutput`.

| Code                              | Memory             |
|-----------------------------------|--------------------|
| Line 1: const num = 3;            | num: 3             |
| Line 2: function multiplyBy2()... | multiplyBy2: ->F-> |
| Line 7: const output = 6          | output: 6          |
| Line 8: const newOutput = ...     | newOutput: 20      |

But there is one more missing piece, (*), how JavaScript knows which function to return back to ? The global scope or some other random function ?

## Call Stack
> Wake-up question, what is a stack ?
JavaScript keeps track of what function is currently running (where's the thread of execution)

So here are the rules:
- Run a function ? => Add to call stack
- Finish running the function ? Remove from call stack
- Whatever is top of the call stack - The currently running function

The stack is not empty, at the bottom of the stack is the **Global Execution Context**, so consider the code running at line 8, `const newOutput=...`, the top of the stack is the `global()`, we need to invoke that function call, top of stack will be `multiplyBy2`, finish running it ? Pop it and return back to the global scope.
