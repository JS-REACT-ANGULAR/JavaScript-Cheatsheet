//FUNCTIONS ARE FIRST CLASS CITIZENS

// 1 - As functions can be assigned to variables
var myfunc2 = function() {
    console.log("inside myfunc2")
}

// 2 -Functions can accept other functions as arguments and they can be passed as arguments like other variables

let myfunc3 = (newFunc) => {
    newFunc()
}

myfunc3(myfunc2); //myfunc3 is accepting myfunc2 as argument

// 3 - Functions can be returned as value from a function too

function getFunction() {
    return function() { console.log("Hi, I am from inside of returned function"); }
}

getFunction()(); //Hi, I am from inside of returned function

// 4 - Functions can also accept default variable in case no params are passed
function newFunc(num1 = 10) { //if No params are passed while calling the function. It will use default value 10
    console.log(5 + num1);
}

newFunc(); //15
newFunc(20); //25