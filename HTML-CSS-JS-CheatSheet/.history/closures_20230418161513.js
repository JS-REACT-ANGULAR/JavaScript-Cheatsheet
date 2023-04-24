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

let newInnerFunction = outerFunction("I am Outer Variable 1"); //Here outerfunction has finished executing
newInnerFunction("I am inner variable") // newInnerFunction still has access to all outerfunction variables due to CLOSURE. Closure helps you maintain STATE. outerVariable1 is STATE and It is maintined even after outerfunction has finished executing.

//RESULT
// I am global Variable
// I am Outer Variable 1
// I am Outer Variable 2
// I am inner variable

//Closure = innerFunction + access to all variables in outerFunction even if outerFunction has finished executing