# Z-Index
## Different z-index in children nodes

When a parent element contains multiple children with different z-index.

The top layer will belong to the child with higher z-index. For example:

- A div has z-index of 1 and 2 children div with z-index 3 and 2 respectively.
- In z-index 3 div has a div of z-index 4
- In z-index 2 div has a div of z-index 10

The top layer wil be z-index 4 instead of the 10 one, since its parent is already in 
higher z-index comparing to the other parent.

> It just works like relationship in our life, your uncle's son maybe younger than you, but he
> is still higher than you since your uncle is the big brother with your father.

> Funny heh ?