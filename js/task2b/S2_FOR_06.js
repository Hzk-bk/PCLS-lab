function sumNested(matrix) {
  let sum = 0;
  for (const row of matrix) {
    for (const n of row) {
      sum += n;
    }
  }
  return sum;
}

// Tests
console.log(sumNested([[1,2,3],[4,5],[6]])); // 21
console.log(sumNested([[1],[2],[3,4]]));     // 10
