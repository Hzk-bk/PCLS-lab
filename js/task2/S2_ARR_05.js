function stats(nums) {
  if (!nums.length) return null;
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const avg = nums.reduce((a,b)=>a+b,0)/nums.length;
  return {min, max, avg};
}

// Tests
console.log(stats([1,2,3,4])); // {min:1,max:4,avg:2.5}
console.log(stats([]));         // null
