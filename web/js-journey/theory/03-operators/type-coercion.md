# Type coercion
Before talking about type coercion in JavaScript, let's talk about it first.
JavaScript is a dynamic language with dynamic types and also a weakly typed language. Hold on mate, you just talk about 2 terminology at same time! (Forget the part JavaScript is a dynamic language, that is not what we are worrying about).
Alright, let's break it down:
### Dynamic types
Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
```javascript
let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean
```
### Weakly typed
JavaScript is also a weakly typed language, which means it allows implicit type conversion when an operation involves mismatched types, instead of throwing type errors.
```javascript
const foo = 42; // foo is a number
const result = foo + "1"; 
// JavaScript coerces foo to a string, 
// so it can be concatenated with the other operand
console.log(result); // 421
```
Sometimes, this is very convenient, but it can be potential footgun if developers didn't intend to do the conversion, or intent to convert in other direction.

>  For symbols and BigInts, JavaScript has intentionally disallowed certain implicit type conversions.


To sum up, type coercion is a process of automatic or implicit conversion of values from one data type to another.

Before having a look at different type of coercion, what is the key difference between type coercion and type conversion ?

>  type coercion is implicit whereas type conversion can be either implicit or explicit.

So as mention above, JavaScript is a weakly typed language. This means that you can often use a value of one type where another type is expected, and the language will convert it to the right type for you. To do so, JavaScript defines a handful of coercion rules.

### Numeric coercion
#### Explicitly conversion
Just apply `Number()` function.
```javascript
Number("12") // 12
```
#### Implicitly conversion
Here is a list of case that trigger implicit conversion:
- comparision operators (>,<,<=,>=)
- bitwise operators(|, &, ^, ~)
- Arithmetic operators (+,-,*,/). Note that + won't trigger if any operands is a string.
- unary + operator
- loose equality operator (==, !=). Again, this won't trigger if both operands is a string

Let's have a look at some example 
```javascript
+'123'          // implicit
123 != '456'    // implicit
4 > '5'         // implicit
5/null          // implicit
true | 0        // implicit
```
Here is how some primitive values are converted to numbers:

```javascript
Number(null)                   // 0
Number(undefined)              // NaN
Number(true)                   // 1
Number(false)                  // 0
Number(" 12 ")                 // 12
Number("-12.34")               // -12.34
Number("\n")                   // 0
Number(" 12s ")                // NaN
Number(123)                    // 123
```
When converting a string to number, the engine first trims the leading and trailing whitespace,\n, \t characters:
- return `NaN` not a valid number
- return 0 if string is empty

Fun fact: `Symbol` can't be converted to number under any circumstances

There are 2 special rules to remember:
1. When applying == to null or undefined, numeric conversion does not happen. null equals only to null or undefined, and does not equal to anything else.
2. NaN does not equal to anything even itself, to check if something is NaN use `Number.isNaN()` function

### String coercion
#### Explicitly conversion 
Just apply `String()` function.
#### Implicitly conversion 
Trigger by the binary `+` operator when any operand is string.

There is not so much to say about this, but one thing worth noticing is `Symbol` can be convert explicitly not implicitly

### Boolean coercion

#### Explicitly conversion
Just apply `Boolean()` function.
#### Implicitly conversion
Implicit conversion happens in logical context, or is triggered by logical operators ( `||`, `&&`, `!`) .

For examples
```javascript
Boolean(2)          // explicit
if (2) { ... }      // implicit due to logical context
!!2                 // implicit due to logical operator
2 || 'hello'        // implicit due to logical operator
```

As soon as there are only 2 possible results of boolean conversion: true or false, it’s just easier to remember the list of falsy values.

```javascript
Boolean('')           // false
Boolean(0)            // false     
Boolean(-0)           // false
Boolean(NaN)          // false
Boolean(null)         // false
Boolean(undefined)    // false
Boolean(false)        // false
```

All of the others is truthy values.

### Object coercion
When it comes to objects, the engine will do 2 processes:
1. Convert an object to primitive value
2. Convert primitive value to final type

And there is just still 3 types: numeric, boolean and string.

The simplest cast is boolean conversion: any non-primitive value is always coerced to `true`, no matter if an object or an array is empty or not.

Objects are converted to primitives via the internal [[ToPrimitive]] method, which is responsible for both numeric and string conversion.

Here is a pseudo implementation of [[ToPrimitive]] method:

[[ToPrimitive]] is passed with an input value and preferred type of conversion: Number or String. preferredType is optional.

Both numeric and string conversion make use of two methods of the input object: valueOf and toString . Both methods are declared on Object.prototype and thus available for any derived types, such as Date, Array, etc.

In general the algorithm is as follows:

1. If input is already a primitive, do nothing and return it.
2. Call `input.toString()`, if the result is primitive, return it.
3. Call `input.valueOf()`, if the result is primitive, return it.
4. If neither `input.toString()` nor `input.valueOf()` yields primitive, throw `TypeError`.

Numeric conversion first calls `valueOf` (3) with a fallback to `toString` (2). String conversion does the opposite: `toString` (2) followed by `valueOf` (3).

Most built-in types do not have `valueOf`, or have valueOf returning this object itself, so it’s ignored because it’s not a primitive. That’s why numeric and string conversion might work the same — both end up calling `toString()`.

Different operators can trigger either numeric or string conversion with a help of preferredType parameter. But there are two exceptions: loose equality `==` and binary `+` operators trigger default conversion modes (preferredType is not specified, or equals to default). In this case, most built-in types assume numeric conversion as a default, except Date that does string conversion.

Now, let's the fun begin

#### Example 1
```javascript
true + false // 1
```
**Explanation**: `true` and `false` will be convert to numbers as 1 and 0, respectively.

#### Example 2
```javascript
12 / "6" // 2
```
**Explanation**: `"6"` will be convert to number 6 and `12/6` is 2

#### Example 3
```javascript
"number" + 15 + 3 // "number153"
```
**Explanation**: `"number" + 15` will make 15 is converted to string resulting as "number15" and the same goes for 3, resulting as `"number153"`

#### Example 4
```javascript
15 + 3 + "number" // "18number"
```
**Explanation**: `15+3` is 18 and converted to string, concatenation with `"number"` and the result is `"18number"`

#### Example 5
```javascript
[1] > null
```
**Explanation**: 
```
~ '1' > 0
~ 1 > 0
~ true
```

#### Example 6
```javascript
"foo" + + "bar" // "fooNaN"
```

**Explanation**: 
The unary `+` has the higher precedence so `+ "bar"` will be converted to number first, but `"bar"` is not a valid number so it return `NaN`. On the second step, it is just a string conversion, as the result is `"fooNaN"`

#### Example 7
```javascript
'true' == true // false
```
**Explanation**: `==` will trigger numeric conversion, as `'true'` will return `NaN` since it is not a valid number and `true` will be convert to 1. 
```
~ NaN == 1 
~ false
```

#### Example 8
```javascript
'false' == false // false
```
**Explanation**:
```
~ NaN == 0
~ false
```
#### Example 9
```javascript
null == '' // false
```
**Explanation**: Remember the special rule in numeric conversion ?


#### Example 10
```javascript
!!"false" == !!"true" // true
```
**Explanation**: `!!` convert both string to boolean `true`, because both is a valid string, resulting as `true == true` then convert to number `1 == 1`, as result is `true`

#### Example 11
```javascript
['x'] == 'x' // true
```
**Explanation**: `==` operator triggers a numeric conversion for an array. Array’s `valueOf()` method returns the array itself, and is ignored because it’s not a primitive. Array’s toString() converts `['x']` to just `'x'` string.
```
~ 'x' == 'x'
~ true
```

#### Example 12 
```javascript
[] + null + 1 // "null1"
```
**Explanation**: `+` operator triggers numeric conversion for `[]`. Array’s `valueOf()` method is ignored, because it returns array itself, which is non-primitive. Array’s `toString` returns an empty string.

On the the second step expression `'' + null + 1` is evaluated.

#### Example 13 
```javascript
[1,2,3] == [1,2,3] // false
```
**Explanation**: No coercion is needed because both operands have same type. Since == checks for object identity (and not for object equality) and the two arrays are two different instances, the result is false.

#### Example 14 (Very interesting)
```javascript
{}+[]+{}+[1] // "0[object Object]1"
```
**Explanation**:
##### In browser:
Since all operands are not primitive values, so `+` start with the leftmost one triggering the numeric conversion. Both `Object's` and `Array's` `valueOf` method returns the object itself, so it's ignored. `toString()` is used as a fallback.

However the first `{}` is not consider as a object literal but instead a block statement, so it's ignored. The whole expresison becomes `+[]+{}+[1]`.

```
~ +[] + {} + [1]
~ 0 + {} + [1]
~ 0 + '[object Object]' + [1]
~ 0 + '[object Object]' + '1'
~ '0[object Object]1'
```

##### In Node:
The fun part is try to run this in Node. Instead of trigger a numeric conversion, it triggers string conversion.
```
~ '[object Object]' + '' + '[object Object]' + '1'
~ '[object Object][object Object]1'
```

#### Example 15
```javascript
!+[]+[]+![]  // "truefalse"
```
**Explanation**: `+[]` will be convert to `0`, then `!` convert in operand to boolean which is false and `!false` is true. While `![]` will be false because `Boolean([])` is `true` and `!` convert it to `false`
```
~ true + '' + false
~ 'truefalse'
```

#### Example 16 
```javascript
0 || "0" && {}  // {}
```
**Explanation**: Logical `||` and `&&` operators coerce operands to boolean, but return original operands (not booleans). `0` is falsy, whereas `'0'` is truthy, because it’s a non-empty string. {} empty object is truthy as well.

```
~ (0 || "0") && {}
~ false || true && true //internally
~ "0" && {}
~ true && true //internally
~ {}
```
