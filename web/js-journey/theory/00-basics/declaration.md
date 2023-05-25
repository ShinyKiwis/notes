# Declarations 
## Basics 
There are three way to declare a variable in JS:
- var: function scoped or globally-scoped
- let: block scoped 
- const block scoped

## Redefining and Redeclaring features 
For variable declared with `var` can be redefined and redeclared anywhere in its scope 
```js
var x = 30
console.log(x)
var x = "hi"
console.log(x)
x = 12.3 
console.log(x)
```

*Results:*
```
30
hi
12.3
```

But for `let`, can be redefined within its scope but **not redeclared** 
```js
let x = 11;
console.log(x); //prints 11
x = "IB"; //works without any error
console.log(x); //prints "IB"

let y = 12;
console.log(y); //prints 12
let y = "Scaler"; // error: Identifier y has already been declared
```

*Results:*
```
/tmp/mdeval/declarationmd_27_36.js:8
let y = "Scaler"; // error: Identifier y has already been declared
    ^

SyntaxError: Identifier 'y' has already been declared
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1176:20)
    at Module._compile (node:internal/modules/cjs/loader:1218:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.15.0
```

For a constant declared with `const`, it can't be redeclared or redefined within its scope and every const declaration must be initialized at the time of declaration.

## Summary

let, var, and const are three ways to declare variables in JavaScript. The main differences between them are their **scoping and mutability**:

    var:
        Variables declared with var are function-scoped or globally-scoped.
        They can be redeclared and reassigned within their scope.
        If a var variable is declared outside of a function, it becomes a global variable.

    let:
        Variables declared with let are block-scoped (i.e., scoped to the nearest set of curly braces).
        They can be reassigned but cannot be redeclared within their scope.
        They are often used in for-loops or other scenarios where you want to create a temporary variable that should not exist outside of a particular block of code.

    const:
        Variables declared with const are also block-scoped.
        They cannot be reassigned or redeclared within their scope.
        However, it's important to note that const does not make a variable immutable - it only prevents reassignment of the variable itself. 
        If the variable is an object or an array, its properties or elements can still be modified.

## Hoisting 
> Hoisting is a mechanism where variables and function declarations are moved to the top of their scope before code execution.

**Note: Read more about in hoisting.md** 

Here is the summary of how hoisting works for different declarations: 
- Variables declared using var are hoisted to the top of their scope and initialized with a value of undefined(special type).
- Variables declared using let are hoisted to the top of their scope but are not initialized with any value
- Variables declared using const are hoisted to the top of their scope but are not initialized with any value.

Some examples:

**For var** 
```js 
console.log(x); // prints undefined
var x = 100;
console.log(x); //prints 100
```

*Results:*
```
undefined
100
```

**For let**
```js 
console.log(y); //Reference error
let y = 200;
console.log(y); //prints 200
```

*Results:*
```
/tmp/mdeval/declarationmd_103_107.js:1
console.log(y); //Reference error
            ^

ReferenceError: Cannot access 'y' before initialization
    at Object.<anonymous> (/tmp/mdeval/declarationmd_103_107.js:1:13)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.15.0
```

**For const**
```js 
console.log(z); //Reference error
const z = 300;
console.log(z); //prints 300
```

*Results:*
```
/tmp/mdeval/declarationmd_128_132.js:1
console.log(z); //Reference error
            ^

ReferenceError: Cannot access 'z' before initialization
    at Object.<anonymous> (/tmp/mdeval/declarationmd_128_132.js:1:13)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.15.0
```

**More example** 
```js 
var a = 10;
{
    var a = -10;
}
let b = a;
{
    let b = -20;
}

console.log(b)
```

*Results:* `-10`
