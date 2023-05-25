// Have no idea why it have such a fancy name
function linearCongruentialGenerator(A, B, M, prevValue) {
  return (A * prevValue + B) % M
}

// I use the example in the reference
let seed = 0
let counter = 0
console.log(`X-${counter++}: ${seed}`)
const [A, B, M] = [ 7, 5, 11 ]

setInterval(() => {
  seed = linearCongruentialGenerator(A, B, M, seed)
  console.log(`X-${counter}: ${seed}`)
  counter += 1
}, 1000)
