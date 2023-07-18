@main def m(args: String*) = 
  for i <- Range.inclusive(1,100) do
    // First solution
    if args(0) == "first" then firstSolution(i)
    else secondSolution(i)

    // Second solution
    
def firstSolution(i: Int) = 
  if i % 3 ==0 && i % 5 == 0 then println("FizzBuzz")
  else if i % 3 == 0 then println("Fizz")
  else if(i % 5 == 0) println("Buzz")
  else println(i)

def secondSolution(i: Int) = 
  println(
    if i% 3 == 0 && i % 5 == 0 then "FizzBuzz"
    else if i % 3 == 0 then "Fizz"
    else if i % 5 == 0 then "Buzz"
    else i
  )