//A new to create functions
let sum = new Function("return 5+5");
console.log(sum()); //Output : 10

//functions are objects in JS as They can have properties
sum.lol = "hahaha";
console.log(sum.lol); //hahaha

function myfunc() {}

//functions have name property
console.log(myfunc.name);