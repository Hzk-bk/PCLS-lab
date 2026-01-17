function mergeDefaults(defaults, overrides) {
  return {...defaults, ...overrides};
}

// Tests
const def = {a:1,b:2};
const over = {b:20,c:3};
console.log(mergeDefaults(def,over)); // {a:1,b:20,c:3}
