# Theory
## Definition
All types except **Object** define immutable values represented directly at the lowest level of the language. We refer to values of these types as primitive values.

=> In Javascript, primitive values are IMMUTABLE by default, once a primitive value is created, it cannot be changed, although the variable that holds it ay be reassigned another value.

By contrast, **Object** and **arrays** are mutable by default, their properties and elements can be changed without reassigning a new value.

All primitive types, except ```null```, can be tested by the typeof operator. ```typeof```null returns "object", so one has to use === null to test for null.

```javascript
console.log(typeof null) // Return 'object'
```

All primitive types, except ```null``` and ```undefined```, have their corresponding object wrapper types, which provide useful methods for working with the primitive values. When a property is accessed on a primitive value, JavaScript automatically wraps the value into the corresponding wrapper object and accesses the property on the object instead.

=> Accessing a property on ```null``` or ```undefined``` throws a ```TypeError``` exception.

```javascript
// Let's have a look at the following code
// Why a primitive value can have a property such as toUpperCase() ? 
// But that value is not an OBJECT !
let str = 'hello'
console.log(str.toUpperCase()) // HELLO
str.someProperty = 1 
console.loG(str.someProperty) // undefined

// Answer: If you try to access properties or set a new property on a string primitive type, 
// javascript will create a temporary object wrapper implicitly on it 
// using String constructor function

```
## Table of primtive data type ( 7 types )
<center>

| Type      	| typeof return value 	| Object wrapper 	|
|-----------	|---------------------	|----------------	|
| Null      	| 'object'            	| N/A            	|
| Undefined 	| 'undefined'         	| N/A            	|
| Boolean   	| 'boolean'           	| Boolean        	|
| Number    	| 'number'            	| Number         	|
| BigInt    	| 'bigint'            	| BigInt         	|
| String    	| 'string'            	| String         	|
| Symbol    	| 'symbol'            	| Symbol         	|

</center>

## Details of primitive data types 
### Null 
The Null type is inhabited by exactly one value: null.
### Undefined
The Undefined type is inhabited by exactly one value: undefined.

Conceptually, ```undefined``` indicates the absence of a value while ```null``` indicates the absence of an object (which could also make up an excuse for ```typeof null === "object")```. The language usually defaults to undefined when something is devoid of a value:
- A return statement with no value (return;) implicitly returns undefined
- Accessing a nonexistent object property (obj.iDontExist) returns undefined.
- A variable declaration without initialization (let x;) implicitly initializes the variable to undefined.
- Many methods, such as Array.prototype.find() and Map.prototype.get(), return undefined when no element is found.
### Boolean
The Boolean type represents a logical entity and is inhabited by two values: true and false.
### Number type 
Number type is a double-precision 64-bit binary format IEEE 754 value. It is capable of storing positive floating numbers:
- Positive: $2^{-1074}$ (```Number.MIN_VALUE```) and $2^{1024}$ (```Number.MAX_VALUE```)
- Negative: -$2^{-1074}$ and -$2^{1024}$

But it can only safely store integers in range:
<center>

$-(2^{53} - 1)$(```Number.MIN_SAFE_INTEGER```) to $2^{53} - 1$(```Number.MAX_SAFE_INTEGER```)

</center>

For values outside the range of this type, will be automatically convert:
- Positive values greater than ```Number.MAX_VALUE``` are converted to ```+Infinity```.
- Positive values smaller than ```Number.MIN_VALUE``` are converted to ```+0```.
- Negative values smaller than -```Number.MAX_VALUE``` are converted to ```-Infinity```.
- Negative values greater than -```Number.MIN_VALUE``` are converted to ```-0```.

The Number type has only one value with multiple representations: 0 is represented as both -0 and +0 (where 0 is an alias for +0). In practice, there is almost no difference between the different representations; for example, +0 === -0 is true. However, you are able to notice this when you divide by zero:
```javascript
console.log(42 / +0); // Infinity
console.log(42 / -0); // -Infinity
```

NaN ("Not a Number") is a special kind of number value that's typically encountered when the result of an arithmetic operation cannot be expressed as a number. It is also the only value in JavaScript that is not equal to itself.

### BigInt
The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary magnitude. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit (```Number.MAX_SAFE_INTEGER```) for Numbers.

A BigInt is created by appending n to the end of an integer or by calling the ```BigInt()``` function.

```javascript
// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal

// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; 
// true because both are 9007199254740992
```
### String
The String type represents textual data and is encoded as a sequence of 16-bit unsigned integer values representing UTF-16 code units. Each element in the string occupies a position in the string. The first element is at index 0, the next at index 1, and so on (zero-based string). The length of a string is the number of UTF-16 code units in it, which may not correspond to the actual number of Unicode characters.

JavaScript strings are immutable. This means that once a string is created, it is not possible to modify it. String methods create new strings based on the content of the current string — for example:
- A substring of the original string
- A concatenation of two strings  

### Symbol 
A Symbol is a unique and immutable primitive value and may be used as the key of an Object property. In some programming languages, Symbols are called "atoms". The purpose of symbols is to create unique property keys that are guaranteed not to clash with keys from other code.
