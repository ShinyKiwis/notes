# Strict comparision vs loosey-goosey 
> This is just a fun name to remember not a technical name
## Strict Equality
First of all, this operator checks whether two operands are equal and return a `Boolean` reslt. Unlike, equality operator, the strict equality operator always consider the operands of different types.

Let's have a look at some examples:
```javascript
console.log(1 === 1);
// Expected output: true

console.log('hello' === 'hello');
// Expected output: true

console.log('1' ===  1);
// Expected output: false

console.log(0 === false);
// Expected output: false
```

This operator provide the `isStrictEqual` semantic.
- If the operands are of different types, return `false`
- If both operands are object, return `true` if they refer to same object
- If both operands are `null` or `undefined`, return `true`
- If either operand is `NaN`, return `false`
- Otherwise, compare two operand's value:
  - Numbers must have same numeric values (`-0` and `+0` are the same)
  - Strings must have same characters in same order
  - Booleans must be both `true` or both `false`

The most notable difference between this operator and the equality (`==`) operator is that if the operands are of different types, the `==` operator attempts to convert them to the same type before comparing.

## Equality (Loosey-Goosey)

The equality (==) operator checks whether its two operands are equal, returning a Boolean result. Unlike the strict equality operator, it attempts to convert and compare operands that are of different types.

Let's have a look at some examples:
```javascript
console.log(1 == 1);
// Expected output: true

console.log('hello' == 'hello');
// Expected output: true

console.log('1' ==  1);
// Expected output: true

console.log(0 == false);
// Expected output: true

```
The equality operators (== and !=) provide the `IsLooselyEqual` semantic. This can be roughly summarized as follows:

Visit MDN to view this: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality
