function invert(obj) {
  const result = {};
  for (const k in obj) {
    const v = obj[k];
    if (v in result) {
      if (Array.isArray(result[v])) result[v].push(k);
      else result[v] = [result[v], k];
    } else result[v] = k;
  }
  return result;
}

// Tests
console.log(invert({a:1,b:2,c:1})); // {1:["a","c"],2:"b"}
console.log(invert({x:"a",y:"b"})); // {a:"x",b:"y"}
