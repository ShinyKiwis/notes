# Objects
> This page is quite different compare to the others, I won't take note so much about the definition or how to access something in object, you can use MDN for it, no need to make a summary. But if you want to add something, feel free to contact me.

## Freeze the objects
The name describe what it does, you freeze the object. We can't change the existing properties or add more properties to it.

Let's have a look at an example 

```javascript
const obj = {
  prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// Expected output: 42
```

## `this` in object
There is a key difference between arrow function and normal function, but now we won't dicuss about it, we just want to know that, we can use `this` to access other property of the object in the object's methods

```javascript
const person = {
  name: "GPT",
  greet: function() {
    console.log(this.name)
  }
}
person.greet() // GPT
```

But with arrow function, let's see what we got!.
```javascript
const person = {
  name: "GPT",
  greet: () => {
    console.log(this.name) // undefined
  }
}
person.greet()
```
# What to do now ? 
If you have reached this page, congrats. Now let's do a real project by making a game, **Pop Quiz**

Warning: The content of the project is taken from FrontEnd Master website, I only store it here for educational purposes.
If I am not allow to do this, I will take this down immediately without any further question.
