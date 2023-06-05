const fruits = ['strawberry', 'mango', 'apple', 'grapes']

const fruitsCopy = [...fruits]

fruitsCopy.push("pear")
fruitsCopy.push("oranges")

console.log(fruits)
console.log(fruitsCopy)

// Why shallow copies in this above situation doesn't affect the original array ?

const array_of_objects = [{name: 'meo'}, {name: 'dem'}]

const copy = [...array_of_objects]
copy[0] = {name: 'YAY'}

console.log(copy)
console.log(array_of_objects)

copy[0].name = "zen"
console.log(copy)
console.log(array_of_objects)

copy[1].name = 'tes'
console.log(copy)
console.log(array_of_objects)
