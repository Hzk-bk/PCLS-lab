
const atLeast = min => n => n >= min;
const nums2 = [1,4,6,2,8];
const min5 = nums2.filter(atLeast(5));

console.log(min5); 
