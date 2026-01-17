var myVar = "Hello";
let myLet = 42;
const myConst = true;

console.table([
  { name: "myVar", value: myVar, type: typeof myVar },
  { name: "myLet", value: myLet, type: typeof myLet },
  { name: "myConst", value: myConst, type: typeof myConst }
]);
