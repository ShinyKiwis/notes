// This file is for optimized random number generator in range 
function linearCongruentialGenerator(A, B, M, prevValue) {
  return (A * prevValue + B) % M
}

function randomInRange(min, max, number, M){
  return Math.floor(min + (number / M) * (max-min))
}

function generateArray(size){
  const result = []
  let seed = 0;
  for(let i=0;i<size;i++){
    seed = linearCongruentialGenerator(21,15,size,seed)
    result.push(randomInRange(1,100,seed, 7))
  }
  return result
}

module.exports = {
  generateArray,
  randomInRange,
  linearCongruentialGenerator
}

