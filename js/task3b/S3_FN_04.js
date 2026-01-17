const nums = [1,2,3,4,5];

const sumSquaresEven = nums
  .filter(n => n % 2 === 0)
  .map(n => n * n)
  .reduce((sum,n) => sum + n, 0);

console.log(sumSquaresEven); 
