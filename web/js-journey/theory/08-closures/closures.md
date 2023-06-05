**Table of contents** 
${toc}

# Closures
Closure is the most esoteric of JavaScript concepts

> Esoteric: very unusual and understood or liked by only a small number of people, especially those with special knowledge
## Definition
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

Fun fact: This definition is extracted from MDN :D.

## Usage
- Enables powerful pro-level functions such as `once` and `memoize`
- Many JavaScript design patterns including the module pattern use closure 
- Build iterators, handle partial application and maintain state in an asynchronous world
## Functions with memories
What happend when a function run ?

When functions get called, JavaScript creates a live store of data (local memory/variable environment/state) for that function's execution context.

> State: The live data of your application/your function at that moment

When the function finishes executing, its local memory is deleted (except the returned value)

But what if our functions could hold on to live data between executions ?

**This would let our function definitions have an associated cache/persistent memory** 

First of all, let's start with **returning function from another function** 

```javascript
function createFunction() {
    function multiplyBy2(num) {
        return num*2
    }
    return multiplyBy2
}

const generatedFunc = createFunction()
const result = generatedFunc(3) // Output: 6
```
| Code                           | Global Memory                |
|--------------------------------|------------------------------|
| Line 1: createFunction         | createFunction: ->F->        |
| Next line: const generatedFunc | generatedFunc: uninitialized |

Again, we go in the execution of `createFunction` function.

| Code                            | Local Memory          |
|---------------------------------|-----------------------|
| Line 1: function multiplyBy2... | multiplyBy2: ->F->(A) |
| Last line: return multiplyBy2   |                       |

> (A): just to note this was created inside the `createFunction` function

Back to main program:

| Code                           | Global Memory           |
|--------------------------------|-------------------------|
| Line 1: createFunction         | createFunction: ->F->   |
| Next line: const generatedFunc | generatedFunc: ->F->(A) |
| Next line: const result        | result: 6               |

> Note that: It return the code of the function not the **label** 

> You have already known how the function `generatedFunc` run

So, `generatedFunc` has no connection with `createFunction` function, it just a result returned from that function. That's it.

But, why we need this ? 

Interestingly, did you see how did we "export" a data (function) created inside a function execution context into global context ?

## Nested Function Scope

### Example

```javascript
function outer() {
    let counter = 0
    function incrementCounter () {
        counter++
    }
    incrementCounter()
}

outer()
```

| Code                     | Global Memory |
|--------------------------|---------------|
| Line 1: function outer() | outer: ->F->  |

Let's execute that function `outer`, create a brand new **execution context**

| Code                                    | Local Memory            |
|-----------------------------------------|-------------------------|
| Line 1: let counter = 0                 | counter: 0              |
| Line 2: function incrementCounter...    | incrementCounter: ->F-> |
| Next line: Execute the incrementCounter |                         |

Let's execute the `incrementCounter` function 

| Code              | Local Memory |
|-------------------|--------------|
| Line 1: counter++ |              |

Now this is interesting, JavaScript will look into the local memory of that execution context. Voila, nothing. Where do we look next ?

Back to **local memory of outer()**, aha, there it is!.

| Code                                    | Local Memory            |
|-----------------------------------------|-------------------------|
| Line 1: let counter = 0                 | **counter: 1**          |
| Line 2: function incrementCounter...    | incrementCounter: ->F-> |
| Next line: Execute the incrementCounter |                         |

### Lexical Scope
> Where you defined your functions determines what data is has access to when you call it.

JavaScript implements lexical scoping, or also known as static scoping. Lexical scoping means that variable scope is determined by the placement of variables and blocks in the source code, regardless of runtime conditions. The scope of a variable is determined by its location within the code's structure, and it remains fixed during the execution of the program.

In JavaScript, variables declared within a function are scoped to that function. This means they are accessible only within the function and any nested functions declared inside it. Variables declared outside of any function, at the top level of a script, have global scope and can be accessed from anywhere within the script.

You can have a look at **dynamic scoping**.

## Retained Function Memory 
Now, let's modify the block code into something more interesting.

```javascript
function outer() {
    let counter = 0
    function incrementCounter () {
        counter++
    }
    return incrementCounter
}

const myNewFunction = outer()
myNewFunction()
myNewFunction()
```

Let's execute this code block.

| Code                                     | Global Memory                |
|------------------------------------------|------------------------------|
| Line 1: function outer...                | outer: ->F->                 |
| Next line: const myNewFunction = outer() | myNewFunction: uninitialized |

Execute `outer` function, add `outer` to call stack by the way and we need a brand new **execution context**. 

| Code                                 | Local Memory               |
|--------------------------------------|----------------------------|
| Line 1: let counter = 0              | counter: 0                 |
| Line 2: funciton incrementCounter... | incrementCounter: ->F->(A) |
| Last line: return incrementCounter   |                            |

Back to main program

| Code                                     | Global Memory           |
|------------------------------------------|-------------------------|
| Line 1: function outer...                | outer: ->F->            |
| Next line: const myNewFunction = outer() | myNewFunction: ->F->(A) |
| Next line: myNewFunction()               |                         |

Aha, another function calling, another brand new execution context for `myNewFunction()`

| Code              | Local Memory |
|-------------------|--------------|
| Line 1: counter++ |              |

Woops, look up for `counter`, first, we look at the `myNewFunction()` local memory,and we don't see it. So what now ?

We look up in the **global memory**, and do we have `counter` ? Absolutely not. 

We are MISSING something here!

It turn out that when we return the code of the function `incrementCounter`, we got more than just the code of that function (definition), it took all the surrounding data from where the function was saved.

To sum up:
- The function definition
- The data existed in that function execution context where the function was created/born

Let's update the Global Memory now

| Code                                     | Global Memory                            |
|------------------------------------------|------------------------------------------|
| Line 1: function outer...                | outer: ->F->                             |
| Next line: const myNewFunction = outer() | myNewFunction: ->F->(A) and [counter : 0] |
| Next line: myNewFunction()

>[counter:0]: to symbolize the local data returned with the function's definition not an array at all, let's call this a **backpack**, this is not the technical term! 

## Function Closure
So before we look into the global memory, we will check the "backpack" (again, this is just for your understanding not a technical term).

Aha, we got `counter` in the backpack, let's update it.

| Code                                     | Global Memory                                  |
|------------------------------------------|------------------------------------------------|
| Line 1: function outer...                | outer: ->F->                                   |
| Next line: const myNewFunction = outer() | myNewFunction: ->F->(A) and [**counter : 1** ] |
| Next line: myNewFunction()

Let' continue your program

| Code                                     | Global Memory                                  |
|------------------------------------------|------------------------------------------------|
| Line 1: function outer...                | outer: ->F->                                   |
| Next line: const myNewFunction = outer() | myNewFunction: ->F->(A) and [**counter : 2** ] |
| Next line: myNewFunction()               |                                                |
| Next line: myNewFunction()               |                                                |

Now you can run the function `myNewFunction` yourself.

So, here is what happened technically.

When declaring the function `myNewFunction` inside the function `outer`, there is a hidden property `[[scope]]` returned with the definition of `myNewFunction` function. This property allow JavaScript to use that property and get to the local data of that execution context.

And if you have been noticing, remember the definition about block scoping ?

> "The scope of a variable is determined by its location within the code's structure, and it remains fixed during the execution of the program."

## Question and Answers
This part is question asked by people attend the workshop offline from FrontendMaster.

There are first two questions:
- Can we have another inner function ? What happen with the hidden property `[[scope]]`

Keep viewing this note

- Can we pass a callback function and access the "surrounding data" ?

That is known as **function decorator**. You can view my notes in section `js-functional-programming` in `web`

Another question:
- What happen if a local variable declared but the inner function doesn't reference it, does it get into the "backpack" ?

Due to optimization in some engine, it might be implemented that if something is never referenced, so just don't put it into the "backpack" => So we can't access that variable anymore, maybe lead to a "memory leak".

## What is the technical term of "backpack" ?
According to the book "If Hemingway Wrote JavaScript", the author call the backpack as "closed over variable environment" (COVE), the **local memory** is known as variable environment and it is closed and pull out to use later like in our example. 

So what is the attribute of this backpack's data ? 
- Persistent (They are not deleted)
- Lexical
- Scope 
- Reference 
- Data (Yes, they are data )

=> P.L.S.R.D 

> Scope: A rules for any programming language, for at any given line of code, what data do I have available to me ?

JavaScript scope rules is **lexical scope** or **static scoping** doesn't depend on where it was run (that is dynamic scope), but instead pull the data out and attached into the backpack with returned function definition. 

And yes, people call it **closure**, COVE, backpack 

## Multiple Closure Instances
In case, we create multiple closure or backpack, they are all independent since they are created from different execution context.
