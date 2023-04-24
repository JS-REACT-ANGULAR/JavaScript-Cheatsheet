//Let's take a look at a function inside another function

let globalVariable = "I am global Variable";

function outerFunction(outerVariable1) {
    let outerVariable2 = "I am Outer Variable 2";
    return function innerFunction(innerVariable) {
        console.log(globalVariable);
        console.log(outerVariable1);
        console.log(outerVariable2);
        console.log(innerVariable);
    }
}

//In the Above example innerFunction has access to + all the variables inside outerFunction + all global variables 

let newInnerFunction = outerFunction("I am Outer Variable 1");



//Closure = innerFunction + access to all variables in outerFunction even if outerFunction has finished executing


//Closure =