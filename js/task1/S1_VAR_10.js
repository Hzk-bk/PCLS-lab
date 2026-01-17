function inspect(value) {
  return {
    type: typeof value,
    isArray: Array.isArray(value),
    isNull: value === null,
    isNaN: typeof value === "number" && Number.isNaN(value)
  };
}

const testValues = [null, undefined, 42, "42", true, {}, [], NaN, (() => {})];

testValues.forEach(v => console.log(v, "->", inspect(v)));
