function groupBy(items, key) {
  const result = {};
  for (const item of items) {
    const val = item[key];
    if (!(val in result)) result[val] = [];
    result[val].push(item);
  }
  return result;
}

// Tests
const people = [
  {name:"Ola",age:20},
  {name:"Ben",age:20},
  {name:"Anna",age:25}
];
console.log(groupBy(people,"age"));

