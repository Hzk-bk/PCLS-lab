const pipe = (...fns) => x => fns.reduce((v,f) => f(v), x);

// Tests
const add1 = n => n + 1;
const double = n => n * 2;
const f = pipe(add1,double);

console.log(f(3)); // (3+1)*2 = 8
