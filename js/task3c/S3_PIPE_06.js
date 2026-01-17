const pipeSafe = (...fns) => x => {
  try {
    let val = x;
    for (const f of fns) {
      val = f(val);
    }
    return {ok:true, value:val};
  } catch(e) {
    return {ok:false, error:e};
  }
};

// Tests
const fSafe = pipeSafe(
  n => n+1,
  n => { if(n>5) throw new Error("Too big"); return n*2; }
);

console.log(fSafe(2)); 
console.log(fSafe(5)); 
