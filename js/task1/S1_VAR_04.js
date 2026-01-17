function typeLabel(value) {
  if (value === null) return "null";
  return typeof value;
}

const testValues = [null, undefined, 42, "42", true, {}, [], (() => {})];

testValues.forEach(v => {
  console.log(v, "->", typeLabel(v));
});
