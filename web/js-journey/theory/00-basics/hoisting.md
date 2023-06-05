**Table of contents** 
${toc}

# Hoisting 
MDN document: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
## What is hoisting ?
JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

 Any of the following behaviors may be regarded as hoisting:
 - Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
 - Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")

 - The declaration of the variable causes behavior changes in its scope before the line in which it is declared.

## var and let,const in hoisting
Some prefer to see `let`, `const`, and `class` as non-hoisting, because the **temporal dead zone(TPZ)** strictly forbids any use of the variable before its declaration, while `var` declaration will have the default value of `undefined` (View Example 1)

Read more about: [Temporal Dead Zone](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) 

Example:
```js 
const x = 1;
{
  console.log(x); // ReferenceError
  const x = 2;
}
```

*Results:*
```
/tmp/mdeval/hoistingmd_19_26.js:3
  console.log(x); // ReferenceError
              ^

ReferenceError: Cannot access 'x' before initialization
    at Object.<anonymous> (/tmp/mdeval/hoistingmd_19_26.js:3:15)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.15.0
```

## Examples
**Example 1**
```js 
console.log(hoistedVariable); // This is known as declaration hoisting
var hoistedVariable;
```

*Results:* `undefined`

**Example 2** 
```js 
hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling

function hoistedFunction(){ 
  console.log(" Hello world! ");
} 
```

*Results:* ` Hello world! `

**Example 3** 
```js 
// Hoisting takes place in the local scope as well
function doSomething(){
  x = 33;
  console.log(x);
  var x;
} 
doSomething()
```

*Results:* `33`

Some note to keep in mind: 
- Variable initializations are not hoisted, only variable declarations are hoisted 
```js 
var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;
```

*Results:* `undefined`

- To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code

```js 
"use strict"
x = 23; // Gives an error since 'x' is not declared
var x; 
``` 

*Results:*
```
```
