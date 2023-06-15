const titles = document.getElementsByClassName('title')
console.log(titles)

// Why forEach not work for this array ?
// Because this is a HTML Collection, not an Array
// Hint: Try using Array.isArray
Array.from(titles).forEach(title => {
  console.log(title)
});

const books = document.querySelectorAll("#book-list li .name")
console.log(books)
// Do you see something weird, why this return a NodeList
// Not a HTML Collection

const bookList = document.querySelector("#book-list");
// bookList.innerHTML = '<h2>Books and more books</h2>';
// bookList.innerHTML += '<p>This how you add something to DOM</p>'


console.log("DOM Traversal")
// DOM Traversal
// Parent
console.log("The parent node is: ", bookList.parentNode)
console.log("The parent element is: ", bookList.parentElement)
console.log("The parent's parent element is: ", bookList.parentElement.parentElement)

// Children
console.log("The children nodes: ", bookList.childNodes)
// Do you see different in length ?
// There are different node types including text node! 
console.log("The children: ", bookList.children)

// Siblings
// Next sibling
console.log("book-list next sibling is: ", bookList.nextSibling)
// Can you guess why it is a text ? 
// It is a link break!

console.log("book-list next element sibling is: ", bookList.nextElementSibling)

// We also have previous sibling, you can try it!

// Interacting with Forms 
// We can use document.forms to see all forms on the page

// Attributes
// to check if element have some attribute use "hasAttribute"
// to set an attribute for an element use "setAttribute"
// to remove an attribute for an element use "removeAttribute"