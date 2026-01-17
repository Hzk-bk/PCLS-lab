const people = [
  {name:"Ola", age:25},
  {name:"Ben", age:20},
  {name:"Anna", age:30}
];

people.sort((a,b) => a.age - b.age);
console.log(people);
