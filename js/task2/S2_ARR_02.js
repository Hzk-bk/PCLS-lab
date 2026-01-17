function unique(values) {
  const result = [];
  for (const val of values) {
    if (!result.includes(val)) result.push(val);
  }
  return result;
}

// Tests
console.log(unique([1,2,2,3,1])); // [1,2,3]
console.log(unique(["a","b","a"])); // ["a","b"]

