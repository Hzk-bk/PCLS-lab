const pipe = (...fns) => x => fns.reduce((v,f) => f(v), x);

// Array processing pipeline
const arrayPipeline = pipe(
  arr => arr.filter(x => !Number.isNaN(+x)), // remove invalid
  arr => arr.map(x => +x),                  // convert to number
  arr => arr.map(x => x*2),                 // double
  arr => arr.reduce((sum,n)=>sum+n,0)      // sum
);

// Tests
console.log(arrayPipeline(["1","x","2","3"])); 
console.log(arrayPipeline(["5","6","foo"])); 