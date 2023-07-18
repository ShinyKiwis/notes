**Table of contents** 
${toc}


# First Steps in Scala
## Define variables
Scala has two kinds of variables: vals and vars. **A val** is similiar to a constant, and **a var** is just a normal variable.

```scala 
val msg = "Hello, World"
```

The above line illustrate one important thing in scala. We don't see any type declaration in the line, meaning that 
Scala has the ability to figure out types we leave off, this is known as **type inference**.

However, it is possible to specify a type explicitly if we want:

```scala
val msg: java.lang.String = "Hello again, world!"
```

Since `java.lang`  types are visible with their simple names in Scala programs, simply:

```scala
val msg: String = "Hello again, world!"
```

Trying to reassign a value in to **a val** will raise error, try it in the REPL.

There are several basic types in Scala (not primitive types) [Scala's Types](https://docs.scala-lang.org/overviews/scala-book/built-in-types.html):
- `Byte`
- `Short`
- `Int`
- `Long`
- `Boolean`
- `Char`
- `Float`
- `Double`

## Define functions
Let's have a look at an example:

```scala
def max(x: Int, y: Int): Int = 
  if x > y then x 
  else y
```

We can even write in one line `def max(x:Int, y:Int): Int = if x > y then x else y`.

Sometimes, the Scala compiler will require us to specify the result type of a function. If the function is *recursive*, 
we must explicitly specify the function's result type (return type), compiler will know how to infer the return type at the end of the day.

Here's the definition of a function that takes no parameter and return no interesting result:

```scala
def greet() = println("Hello, World!")
```

Defining this function in the REPL, it will respond with `def greet(): Unit`. This line indicates 3 things
- greet: the name of the function (of course it is)
- (): empty parenthesis means that this function takes no parameters
- Unit: is the result's type

`Unit` is similiar to Java's `void` type; in fact, every void-returning method in Java is mapped to a Unit-returning method 
in Scala. Methods with the result type of Unit are only executed for their side effects. In the case of `greet()`, the side effect
is a friendly greeting printed to the standard output.

### Returning values from methods 
The last expression within the `{}` block is treated as the return value of Scala method (same with Ruby)

### Function values
We can define function values using the => syntax. Functions values are similar to methods, in that we call
them with arguments and they can perform some action or return some value. Unlike methods, functions
themselves are values: we can pass them around, store them in variables, and call them later.

> Arrow function in JS mate and yes we can pass function as argument (High order functions)

```scala
var g: Int => Int = i => i + 1 

g(10)
```

### Multiple Parameter Lists
Methods can be defined to take multiple parameter lists. This is useful for writing higher-order methods
that can be used like control structures, such as the `myLoop` method below:

```scala
def myLoop(start: Int, end: Int) (callback: Int => Unit ) {
  for(i <- Range(start,end)) {
    callback(i)
  }
}
```
The ability to pass function literals to methods is used to great effect in the standard library, to concisely
perform transformations on collections

## Writing scripts with Scala 
We have been playing with REPL until now, let's write some program!

```scala
// hello.scala
@main def m() =
  println("Hello, world from a script!")
```

then run:

```bash
scala hello.scala
```

We can access command line arguments passed to our script by taking them as parameters to our main function such as:

```scala
@main def m(args: String*) = 
  println("Hello, " + args(0) + "!")
```

We use a special type annotation here `String*`, which means zero to many repeated paramters of type **String**, 
which is a squencs of strings and have type **Seq[String]**. In Scala, sequences are zero based and we access an element by specifying
an index in parentheses (not square brackets!).

## Looping
Just like other languages, there are 2 basic loop:
- while loop
- for loop
### While loop
```scala
@main def m(args: String*) =
  var i = 0
  while i < args.length do
    println(args(i))
    i += 1
```

> In Scala, there is anything such as i++ but instead use i+=1

More verbose, we can use curly brackets like C++ or Java for Scala. (I don't think you need an example for this hehe)

As of Scala 3, the indentation-based style, called "quite syntax", is recommended over the curly brace style. This version of Scala
also introduced *end markers* to make it easier to see where larger indented regions end. 

### Iterate with foreach and for-do
Scala offer a fusing of two paradigm in programming: OOP and functional programming.
One of the main characteristics of a functional language is that functions are **first class constructs**. For example:

```scala
@main def m(args: String*) = 
  args.foreach(arg => println(arg))
```
In this code, we call the foreach method on args and pass in a function. In this case, we’re passing in **a function literal** that takes one parameter named arg. The body of the function is println(arg).

In case, we want to specify the type of the `arg`, we can do it as following:

```scala
@main def m(args: String*) = 
  args.foreach((arg: String) => println(arg))
```

> Syntax of a function literal: (x: Int, y: Int)[function parameters in parentheses] =>[right arrow] x + y[function body]

Interestingly, if a function literal consits of one statement that takes a single argument, we don't need explicitly name and specify the argument.

```scala
@main def m(args: String*) =
  args.foreach(println)
```

There is only a functional relative of the imperative for (those in Java, C), called a *for expression* is available in Scala.

```scala
@main def m(args: String*) =
  for arg <- args do 
    println(arg)
```

One thing worth noticing is that `arg` is a `val` not a `var`. Although it may seem to be a `var` because it will get a new value on each 
iteration, it really is a `val` and can't be reassigned inside the body of the for expression.

### Several usages

**Loop over a range of indices such as `Range(0, 5)`**
```scala
// Scala 2
for (i <- Range(0,5)) {
  println(i)
}
```

**Nested loop**
```scala
val multi = Array(Array(1,2,3), Array(4,5,6))
// In case spreading nested loops over multiple lines, we use {} instead of ()
for(arr <- multi; i <- arr) println(i)
```

## If-Else
For syntax and usages of if statements/expression, visit `fizzbuzz*.scala` in folder `scripts`.

## Comprehension
Beside using `for` for loops, we can use it together with `yield`, to transform a collection into a new collection such as:

```scala
val a = Array(1,2,3,4)
val a2 = for (i <- a) yield i*i
```

Similiar to loops, we can filter which items end up in the final collection using an `if` guard inside the parentheses:

```scala
val a4 = for (i <- a if i % 2 ==0 ) yield "hello" + i 
```

# Exercises
Visit the scripts folder and try doing FizzBuzz, classical problem!
