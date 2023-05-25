# How numbers are encoded in JavaScript ?
## JavaScript numbers
All numbers in JavaScript are floating point numbers, to be more accurate, they are represented internally in 64 bit binary (double-precision).
So how they divided 64 bits into 3 parts ?
- Sign bit (1 bit): bit 63 
- Exponent (11 bit): bit 62 - bit 52
- Fraction (52 bit): bit 51 - bit 0

The components work as follows: If the sign bit is 0, the number is positive, otherwise negative. Roughly, the fraction contains the digits of a number, while the exponent indicates where the point is.
## The fraction
One way of representing non-negative floating point numbers:
- The significand (mantissa) contains the digits, as a natural number
- The exponent specifies how many digits to the left (negative exponent) and to the right (positive exponent) the point should be shifted
> JavaScript numbers use a rational number as the significand: 1.f where f is the 52 bit fraction. Ignoring the sign, the number is the significand multiplied by $2^p$ where p is the exponent.

For examples:
<center>

| f and p     	| Converted                          	|
|-------------	|------------------------------------	|
| f=101, p=2  	| Number: 1.101 × $2^2$ = 110.1      	|
| f=101, p=-2 	| Number: 1.101 × $2^{-2}$ = 0.01101 	|
| f=0, p=0    	| Number: 1.0 × $2^0$= 1             	|

</center>

### Representing integers
> How many bits does the encoding give us for integers ? 

The significand has 53 digits, one before the point, 52 after the point. With p = 52, we have a 53 bit natural number. Interestingly, we have full 53 bits for the magnitude (absolute value) of the integer, since the sign of the number is stored separately.

## The exponent
The exponent is 11 bit long, meaning its lowest value is 0, its highest value is 2047 ($2^{11} -1$). To support negative exponents, the so-called offset binary is used: 1023 is the zero, all lower numbers are negative, all higher numbers are positive. That means that you subtract 1023($2^{11-1}-1$) from the exponent to convert it to a normal number. Therefore, the variable p that we previously used equals e−1023 and the significand is multiplied by $2^{e−1023}$.

>Why do we have 1023 for the exponent ?

In case you are student from Bach Khoa university and attended the class of Mr.Phung in PPL, you know that with n-bias for exponent we will have the formula as follow:
<center>
  
$2^{n-1}-1$

</center>

In this case, we got 11 bits for the exponent so n = 11 and we got the offset as 1023. (For some examples, have a look at the PPl.txt file in the same directory)

### Special exponents
Two exponent values are reserved: The lowest one (0) and the highest one (2047). An exponent of 2047 is used for infinity and NaN (not a number) values [2]. The IEEE 754 standard has many NaN values, but JavaScript all represents them as a single value NaN. An exponent of 0 is used in two capacities:
- First, if the fraction is also 0 then the whole number is 0 ( As the sign is stored separately, we have both −0 and +0)
- Second, An exponent of 0 is also used to represent very small numbers (close to zero). Then the fraction has to be non-zero and, if positive, the number is computed via:
<center>
  
$0.f * 2^{-1022}$

</center>

This representation is called denormalized. The previously discussed representation is called normalized.

The smallest positive (non-zero) number that can be represented in a normalized manner is

<center>
  
$1.0 * 2^{-1022}$

</center>

The larget denormalized number is
<center>
  
$0.1 * 2^{-1022}$

</center>

### Summary exponents
<center>

| Formula                     	| Constraint                 	|
|-----------------------------	|----------------------------	|
| $(−1)^s × 1.f × 2^{e−1023}$ 	| normalized, 0 < e < 2047   	|
| $(−1)^s × 0.f × 2^{e−1022}$ 	| denormalized, e = 0, f > 0 	|
| $(−1)^s × 0$                	| e = 0, f = 0               	|
| NaN                         	| e = 2047, f > 0            	|
| $(−1)^s × ∞ (infinity)$     	| e = 2047, f = 0            	|

</center>

## Decimal fractions
Not all decimal fractions can be represented precisely in JavaScript, as illustrated by the following result:
```javascript
> 0.1 + 0.2
0.30000000000000004
```

Neither of the decimal fractions 0.1 and 0.2 can be represented precisely as a binary floating point number. However, the deviation from the actual value is usually too small to be displayed. Addition leads to that deviation becoming visible. Another example:
```javascript
> 0.1 + 1 - 1
0.10000000000000009
```

> Why 0.1 can't be represented accurately as decimal fraction ?

### Comparing decimal fractions 
Hence, when you work with decimal input that has fractional values, you should never compare them directly. Instead, take an upper bound for rounding errors into consideration. Such an upper bound is called a machine epsilon. The standard epsilon value for double precision is $2^{-53}$.
```javascript
var epsEqu = function () {
  var EPSILON = Math.pow(2,-53)
  return function epsEqu(x,y) {
    return Math.abs(x-y) < EPSILON
  }
}
```

The above function ensures correct results where normal comparison would be inadequate:
```javascript
> 0.1 + 0.2 === 0.3
false
> epsEqu(0.1+0.2, 0.3)
true
```

## The maximum integer
What does one mean if one says “x is the maximum integer”? It means that every integer n in the range 0 ≤ n ≤ x can be represented and that the same does not hold for any integer greater than x. $2^{53}$ fits that bill. All previous numbers can be represented:

```javascript
>Math.pow(2, 53)
9007199254740992
> Math.pow(2, 53) - 1
9007199254740991
> Math.pow(2, 53) - 2
9007199254740990
```

However, the following can't be represented:

```javascript
> Math.pow(2, 53) + 1
9007199254740992
```

A few aspects of $2^{53}$ being the upper limit might be surprising. We will look at them via a series of questions. One thing to keep in mind is that the limiting resource at the high end of the integer range is the fraction; the exponent still has room to grow.

_**Why 53 bits ?**_

 You have 53 bits available for the magnitude (excluding the sign), but the fraction comprises only 52 bits. How is that possible? As you have seen above, the exponent provides the 53rd bit: It shifts the fraction, so that all 53 bit numbers except the zero can be represented and it has a special value to represent the zero (in conjunction with a fraction of 0).

 _**Why is the highest integer not $2^{53}−1$?**_

Normally, x bit mean that the lowest number is 0 and the highest number is $2^x−1$. For example, the highest 8 bit number is 255. In JavaScript, the highest fraction is indeed used for the number $2^{53}−1$, but $2^{53}$ can be represented, thanks to the help of the exponent – it is simply a fraction f = 0 and an exponent p = 53 (after conversion):

<center>

$1.f * 2^p = 1.0*2^{53} = 2^{53}$

</center>


