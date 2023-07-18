/*
There is one interesting question: why we can use `+=` to add new element to the builder ?
Simply because trait Builder implemented this operation!

Visit this link for more information: 
https://docs.scala-lang.org/overviews/core/architecture-of-scala-collections.html
*/

@main def m() = 
  val b = Array.newBuilder[Int]

  b += 1 
  b += 2
  b += 3 
  b += 4

  val arr = b.result()
  for(element <- arr) println(element)

  