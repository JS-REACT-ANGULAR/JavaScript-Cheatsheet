//A new to create functions
let sum = new Function("return 5+5");
console.log(sum()); //Output : 10

//functions are objects in JS as They can have properties
sum.lol = "hahaha";
console.log(sum.lol); //hahaha

function myfunc() {}
//functions have name property
console.log(myfunc.name); //myfunc

//FUNCTIONS ARE FIRST CLASS CITIZENS
//As functions can be assigned to variables
var myfunc2 = function() {
    console.log("inside myfunc2")
}

//Functions can accept other functions as arguments and they can be passed as arguments

let myfunc3 = (newFunc) => {
    newFunc()
}

myfunc3(myfunc2); //myfunc3 is accepting myfunc2 as argument