function pick(obj, keys) {
  const result = {};
  for (const k of keys) {
    if (k in obj) result[k] = obj[k];
  }
  return result;
}

// Tests
console.log(pick({a:1,b:2,c:3},["a","c"])); // {a:1,c:3}
console.log(pick({x:5,y:6},["y","z"]));     // {y:6}
