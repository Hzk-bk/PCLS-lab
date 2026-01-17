function countOccurrences(values) {
  const counts = {};
  for (const v of values) {
    counts[v] = (counts[v] || 0) + 1;
  }
  return counts;
}

// Tests
console.log(countOccurrences(["a","b","a","c","b","a"])); 
console.log(countOccurrences([1,2,2,3]));                
