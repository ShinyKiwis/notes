// What is the call stack when running this ?
/* (First element is the top of the stack)
* At line 14: Call stack - A
* At line 8: Call stack - B - A 
* After executed B: Call stack - A
* After line 16: Call stack - EMPTY
* */

function A() {
  B("Greeting")
}

function B(greeting) {
  console.log(greeting)
}

A()
