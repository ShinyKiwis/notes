# Definition
A call stack is a data structure (stack: First In Last Out), a mechanism for interpreter to keep track of its place in a script that call multiple functions - what function is currently being run and what functions are called from that function.
If we call a function to execute:
- The Interpreter add it to the stack and execute it
- Any functions that are called by the added function are added on top of it, and run where their calls are reached
- After executed, the interpreter takes the function off the stack and resumes execution where it left off in the last code listing
- If the stack takes up more space than it was assigned, a "stack overflow" error is thrown

To sum up, at the most basic level, call stack is a data structure that uses the Last In First Out (LIFO) principle to temporarily store and manage function invocation (fancy name for function call)
# Questions
## LIFO and FILO, are there any differences ?
Welp, they are the same at the end of the day.
## Why in the definition, you use the phrase temporarily store ?
When a function is invoked (called), the function, its parameters, and variables are pushed into the call stack to form a stack frame. This stack frame is a memory location in the stack. The memory is cleared when the function returns as it is pop out of the stack.

So we can say that a function invocation creates a stack frame that occupies a temporary memory
## What may cause a stack overflow error ?
A recursive function that have no base case to end the recursion
```javascript
function callMyself(){
  callMyself();
}

callMyself();
```
