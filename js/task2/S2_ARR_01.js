function cleanNumbers(arr) {
  return arr
    .map(item => +item.trim())
    .filter(num => !Number.isNaN(num));
}

// Tests
console.log(cleanNumbers([" 1 ", "x", "2"])); // [1, 2]
console.log(cleanNumbers(["3", " 4 ", "a", "5"])); // [3,4,5]
