// Have no idea why it have such a fancy name
function linearCongruentialGenerator(A, B, M, prevValue) {
  return (A * prevValue + B) % M
}

function randomInRange(min, max, number) {
  return min + number % (max - min + 1)
}

function frequencyDisplay(randomValues) {
  const frequency = {}
  randomValues.forEach(value => {
    frequency[value] = frequency[value] != undefined ? frequency[value]+1: 0;
    // Bonus: Why this give wrong result ?
    // frequency[value] = frequency[value] ? frequency[value]+1: 0;
  })
  Object.keys(frequency).map(key => {
    console.log(`${key}: ${frequency[key]}`)
  }) 
}

// I use the example in the reference
let seed = 0
const randomValues = []
const [A, B, M] = [ 7, 5, 3 ]

for (let i=0; i<= 100;i++){
  seed = linearCongruentialGenerator(A,B,M,seed)
  randomValues.push(randomInRange(0,1,seed))
}

frequencyDisplay(randomValues)
