function isArray(value) {
  return Object.prototype.toString.call(value) === "[object Array]";
}

console.log(isArray([]));       // true
console.log(isArray({}));       // false
console.log(isArray("string")); // false
