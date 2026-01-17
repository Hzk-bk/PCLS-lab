function transformRecords(users) {
  return users
    .filter(u => u.active)
    .map(u => u.name.toUpperCase())
    .sort();
}

// Tests
const users = [
  {id:1,name:"Ola",active:true},
  {id:2,name:"Ben",active:false},
  {id:3,name:"Anna",active:true}
];
console.log(transformRecords(users)); // ["ANNA","OLA"]
