# NodeList and HTMLCollection
## Introduction

DOM or Document Object Model, which is the HTML skeleton forming the structure of every webpage is a **tree**. 

Any time we call JavaScript’s built-in querySelector method on the document or on a particular node, we are traversing through that tree and inspecting the CSS selectors of elements within that tree.

MDN describes querySelector as implementing:
> "The matching is done using depth-first pre-order traversal of the document's nodes starting with the first element in the document's markup and iterating through sequential nodes by order of the number of child nodes."

And the return value is:

> "An Element object representing the first element in the document that matches the specified set of CSS selectors, or null is returned if there are no matches."

For `querySelectorAll`, it may have return more than one element, so instead it will return a **static NodeList**

So now there will be some differences!

For method `getElementById`, it also returns an `Element`. (`Element` is just a base interface, visit MDN for better explanation).

However, `getElementsByClassName` returns something call **live HTMLCollection**, if you visit this link: [MDN Document](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)

You will see a red warning at the top of the document, giving the definition of live HTMLCollection.

## What is practically important about this? 

- `querySelectorAll` returns a NodeList (static)
- `getElementsByClassName` returns a HTMLCollection (live)

Neither of these are arrays, they are just different types of objects. HOWEVER, with NodeLists (which are newer/more modern) you can still use `forEach()` to iterate through them.

Anyway, to transform they into `Array` object of JS, you can simply use `Array.from(arg)`.

Important point is that the difference between static and live is that live reflects exactly what is currently on the DOM, whereas static collections will not update if something is deleted on the DOM.