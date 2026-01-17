function omit(obj, keys) {
  const result = {};
  for (const k in obj) {
    if (!keys.includes(k)) result[k] = obj[k];
  }
  return result;
}

// Tests
console.log(omit({a:1,b:2,c:3},["b"])); // {a:1,c:3}
console.log(omit({x:5,y:6},["x","z"])); // {y:6}
