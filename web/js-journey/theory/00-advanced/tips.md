# Tips 
## Replace multiple if else statements with switch case
For multiple if else, we can replace the conditions into different case values such as:

```javascript
const a = 10;
switch(true) {
  case a > 10:
    console.log("a is greater than 10");
    break;
  case a < 10:
    console.log("a is smaller than 10");
    break;
  default:
    console.log("a is 10")
}
```