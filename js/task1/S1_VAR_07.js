function toNumberOrNull(x) {
  const n = +x;
  return Number.isNaN(n) ? null : n;
}

console.log(toNumberOrNull("12"));    // 12
console.log(toNumberOrNull("12.5"));  // 12.5
console.log(toNumberOrNull(" 12 "));  // 12
console.log(toNumberOrNull("12x"));   // null
console.log(toNumberOrNull(""));      // 0
