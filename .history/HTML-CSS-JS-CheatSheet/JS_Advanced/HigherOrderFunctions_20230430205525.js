//A “higher-order function” is a function that can accept functions as parameters and/or returns a function;



//1 - HOF returning another function

function letEmployeeLogin(empName) {
    return function() {
        console.log("Access granted to: " + empName);
    }
}

let evaLogin = letEmployeeLogin("Eva");
evaLogin();

let adamLogin = letEmployeeLogin("Adam");
adamLogin();


//-----------------Function Currying--------

const multiplyBy = (num1) => {
    return function(num2) {
        console.log(num1 * num2);
    }
}

let multiplyBy2 = multiplyBy(2);
let multiplyBy10 = multiplyBy(10);

multiplyBy2(5);
multiplyBy10(5);


let multBy = (num1, num2) => {
    console.log(num1 * num2)
}

let multBy2 = multBy.bind(this, 2);
let multBy10 = multBy.bind(this, 10);

multBy2(5);
multBy10(5);