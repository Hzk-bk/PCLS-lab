function get(obj, path, fallback) {
  const parts = path.split('.');
  let current = obj;
  for (const part of parts) {
    if (current && part in current) current = current[part];
    else return fallback;
  }
  return current;
}

// Tests
const data = {a:{b:{c:42}}};
console.log(get(data,"a.b.c",0)); // 42
console.log(get(data,"a.b.x",0)); // 0
console.log(get(data,"a.b",{}));  // {c:42}
