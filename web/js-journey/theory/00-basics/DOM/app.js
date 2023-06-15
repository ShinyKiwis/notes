document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector("#book-list ul")
  
  // Technique used named "Event Bubbling"
  // Delete books
  list.addEventListener('click', (e) => {
    if(e.target.className == 'delete') {
      const li = e.target.parentElement;
      list.removeChild(li)
    }
  })
  
  // Add books
  const addForm = document.forms['add-book']
  addForm.addEventListener('submit', (e) => {
    // Prevent refreshing page
    e.preventDefault()
    const inputValue = addForm.querySelector("input[type=\"text\"]").value 
    const li = document.createElement("li")
    const bookName = document.createElement("span")
    bookName.textContent = inputValue
    bookName.classList.add('name')
  
    const deleteBtn = document.createElement("span")
    deleteBtn.textContent = 'delete'
    deleteBtn.classList.add('delete')
  
    li.appendChild(bookName)
    li.appendChild(deleteBtn)
  
    list.appendChild(li)
  })
  
  // Hide books
  const hideBox = document.querySelector("#hide")
  
  hideBox.addEventListener('change', (e) => {
    if(hideBox.checked) {
      list.style.visibility = "hidden";
    }else {
      list.style.visibility = "visible";
    }
  })
  
  // Filter books 
  const searchBar = document.forms['search-books'].querySelector('input')
  searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase()
    const books = list.getElementsByTagName("li")
    Array.from(books).filter(book => {
      const title = book.firstElementChild.textContent
      if(title.toLowerCase().indexOf(term) != -1) {
        book.style.display = 'block'
      }else {
        book.style.display = 'none'
      }
    })
  })

})
