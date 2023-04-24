//Let's take a function inside another function

function outerFunction(outerVariable1) {
    let outerVariable2 = 10;
    return function innerFunction(innerVariable) {
        console.log(outerVariable1);
        console.log(outerVariable2);
        console.log(innerVariable);

    }
}


//Closure =