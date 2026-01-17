var myVar = "Hello";
let myLet = 42;
const myConst = true;

console.table([
  { name: "myVar", value: myVar, type: typeof myVar },
  { name: "myLet", value: myLet, type: typeof myLet },
  { name: "myConst", value: myConst, type: typeof myConst }
]);

// Let's change the values and log them again
myVar = "World";
myLet = 100;
// myConst = false; // This would cause an error because it's a constant

console.log("\nAfter updates:");
console.table([
  { name: "myVar", value: myVar, type: typeof myVar },
  { name: "myLet", value: myLet, type: typeof myLet },
  { name: "myConst", value: myConst, type: typeof myConst }
]);
