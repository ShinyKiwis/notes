# Theory 

Before we start, this document won't display every operator, just some special one with special cases.
## Addition (+)
This opertor produce two things:
- Sum of numeric operands
- String concatenation

For example:
```javascript
console.log(2 + 2);
// Expected output: 4

console.log(2 + true);
// Expected output: 3

console.log('hello ' + 'everyone');
// Expected output: "hello everyone"

console.log(2001 + ': A Space Odyssey');
// Expected output: "2001: A Space Odyssey"

```

The addition operator (+) is overloaded for two distinct operations: numeric addition and string concatenation. When evaluating, it first coerces both operands to primitives. Then, the two operands' types are tested:

- If one side is a string, the other operand is also converted to a string and they are concatenated
- If they are both BigInts, BigInt addition is performed. If one side is a BigInt but the other is not, a TypeError is thrown
- Otherwise, both sides are converted to numbers, and numeric addition is performe

## Logical operator  (&&, ||)
### Logical AND 
This operator evaluates from left to right, returning immediately with the value of first `falsy` operand it encounters. If all values are `truthy`, retur the last operand's value

If a value can be converted to `true`, the value is so-called `truthy`. If a vale can be converted to `false`, the value is so-called `falsy`.

Some examples:
- false
- null 
- NaN
- 0
- empty string 
- undefined

Let's have a look at some examples:
```javascript
a1 = true && true; // t && t returns true
a2 = true && false; // t && f returns false
a3 = false && true; // f && t returns false
a4 = false && 3 === 4; // f && f returns false
a5 = "Cat" && "Dog"; // t && t returns "Dog"
a6 = false && "Cat"; // f && t returns false
a7 = "Cat" && false; // t && f returns false
a8 = "" && false; // f && f returns ""
a9 = false && ""; // f && f returns false
```
### Logical OR
If `expr1` can be converted to true, returns `expr1`; else, returns `expr2`.

Let's have a look at some examples:
```javascript
true || true; // t || t returns true
false || true; // f || t returns true
true || false; // t || f returns true
false || 3 === 4; // f || f returns false
"Cat" || "Dog"; // t || t returns "Cat"
false || "Cat"; // f || t returns "Cat"
"Cat" || false; // t || f returns "Cat"
"" || false; // f || f returns false
false || ""; // f || f returns ""
false || varObject; // f || object returns varObject
```

### Operator precedence
The AND operator has a higher precedence than the OR operator, meaning the `&&` operator is executed before the `||` operator

### Short-circuit evaluation
#### Logical AND 
The logical AND expression is a short-circuit operator. As each operand is converted to a boolean, if the result of one conversion is found to be false, the AND operator stops and returns the original value of that falsy operand; it does not evaluate any of the remaining operands.
```javascript
function A() {
  console.log("called A");
  return false;
}
function B() {
  console.log("called B");
  return true;
}

console.log(A() && B());
// Logs "called A" to the console due to the call for function A,
// && evaluates to false (function A returns false), then false is logged to the console;
// the AND operator short-circuits here and ignores function B

```

#### Logical OR 
Short circuit means that the second operand part above is not evaluated, hence any side effects of doing so do not take effect (e.g., if expr is a function call, the calling never takes place). This happens because the value of the operator is already determined after the evaluation of the first operand. See example:

```javascript
function A() {
  console.log("called A");
  return false;
}
function B() {
  console.log("called B");
  return true;
}

console.log(B() || A());
// Logs "called B" due to the function call,
// then logs true (which is the resulting value of the operator)

```

## Logical Assignment
### Logical AND assignment (&&=)
The logical AND assignment (x &&= y) operator only assigns if x is `truthy`.

### Logical OR assignment (||=)
The logical OR assignment (x ||= y) operator only assigns if x is `falsy`.

### Nullish coalescing assignment (??=)
The nullish coalescing assignment (x ??= y) operator, also known as the logical nullish assignment operator, only assigns if x is nullish (null or undefined).
