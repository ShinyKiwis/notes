const {generateArray, randomInRange, linearCongruentialGenerator} = require("./util.js")

// As you can see with specific A,B,M and seed
// Everytime you run the program you will get the same random numbers
// This is a great feature for debugging
const random_array = generateArray(100)
console.log(random_array)

function randomizeArray(array) {
  let max_i = array.length
  let seed = 3
  for(let i =0; i<max_i-1;i++) {
    seed = linearCongruentialGenerator(2,5,7, seed)
    const j = randomInRange(i, max_i, seed , 7)
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

randomizeArray(random_array)
console.log(random_array)
