const compose = (...fns) => x => fns.reduceRight((v,f) => f(v), x);

// Define test functions here
const add1 = n => n + 1;
const double = n => n * 2;

// Test
const f2 = compose(add1,double);
console.log(f2(3)); // double(3)=6, add1(6)=7
