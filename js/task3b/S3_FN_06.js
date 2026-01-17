const mapValues = (obj, fn) => {
  const result = {};
  for (const k in obj) {
    result[k] = fn(obj[k]);
  }
  return result;
};

// Tests
const data = {a:1,b:2,c:3};
const doubled = mapValues(data, x => x*2);
console.log(doubled); 
