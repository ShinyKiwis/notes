# This is a list of some questions for reviewing the theory 

## Question 1
Explain why `5/null` or `5/-null` return `Infinity` and `-Infinity` respectively.

Because the `/` operator will trigger a numeric conversion, that will convert null to 0 and `5/0` will return `Infinity`, the same for `-Infinity`

## Question 2
What is the result of `Number(null)` and `Number(undefined)` ?

`Number(null)` return 0
`Number(undefined)` return `NaN`

## Question 3
Explain the mechanism of this `Number("   \t \n   )`.

When converting a string to number, the engine first trims the leading and trailing whitespace,\n, \t characters:
- return `NaN` not a valid number
- return 0 if string is empty

## Question 4
Can we convert `Symbol` to number ?

Nope


## Question 5
Does `null` or `undefined` convert to number when using in `==` ?

Numeric conversion does not happen. null equals only to null or undefined, and does not equal to anything else.

## Question 6
How to check if something is not `NaN`

Use `Number.isNaN()`

## Question 7
List all the falsy values.

```javascript
console.log(Boolean(''))
console.log(Boolean(0))
console.log(Boolean(0n))
console.log(Boolean(-0))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))
console.log(Boolean(false))

// This is hard, and the only falsy object
console.log(Boolean(document.all))

```
