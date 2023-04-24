//Let's take a look at a function inside another function

function outerFunction(outerVariable1) {
    let outerVariable2 = 10;
    return function innerFunction(innerVariable) {
        console.log(outerVariable1);
        console.log(outerVariable2);
        console.log(innerVariable);
    }
}

//In the Above example innerFunction has access to all the variables inside outerFunction


//Closure =