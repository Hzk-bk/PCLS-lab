try {
  {
    let x = 10;
  }
  console.log(x);
} catch(e) {
  console.log("Cannot access let outside block:", e.message);
}

var y = 20;
{
  var z = 30;
}
console.log("var is accessible outside block:", z); 
