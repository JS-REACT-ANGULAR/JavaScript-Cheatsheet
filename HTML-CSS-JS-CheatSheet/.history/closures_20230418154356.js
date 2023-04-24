//Let's take a look at a function inside another function

let globalVariable = "I am global Variable";

function outerFunction(outerVariable1) {
    let outerVariable2 = 10;
    return function innerFunction(innerVariable) {
        console.log(globalVariable);
        console.log(outerVariable1);
        console.log(outerVariable2);
        console.log(innerVariable);
    }
}

//In the Above example innerFunction has access to all the variables inside outerFunction
//Closure = innerFunction + all variables outside 


//Closure =