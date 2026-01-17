// Define pipe function
const pipe = (...fns) => x => fns.reduce((v,f) => f(v), x);

const normalize = pipe(
  s => s.trim(),
  s => s.toLowerCase(),
  s => s.replace(/\s+/g, ' ')
);

// Tests
console.log(normalize("  Hello   africa ")); // "hello Africa"
console.log(normalize("  Foo   Bat  "));     // "foo bat"
