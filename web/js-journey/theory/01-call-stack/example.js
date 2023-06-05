// What is the call stack when running this ?

/*
* global() 
* */

function A() {
  B("Greeting")
}

function B(greeting) {
  console.log(greeting)
}

A()

console.log("END OF PROGRAM")
