@main def m() = 
  var i = 0
  val output = new Array[String](100)
  flexibleFizzBuzz(s => {
    output(i) = s 
    i+= 1
  })
  for (i <- Range(0,100)) do 
    println(output(i))

def FizzBuzz(i: Int): String = 
  if i% 3 == 0 && i % 5 == 0 then "FizzBuzz"
  else if i % 3 == 0 then "Fizz"
  else if i % 5 == 0 then "Buzz"
  else i.toString

def flexibleFizzBuzz(callback: String => Unit) = 
  for ( i <- Range.inclusive(1,100)) do 
    callback(FizzBuzz(i))
