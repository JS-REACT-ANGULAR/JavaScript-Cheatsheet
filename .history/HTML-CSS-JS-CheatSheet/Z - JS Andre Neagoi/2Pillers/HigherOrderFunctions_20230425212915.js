function letEmployeeLogin(empName) {
    return function() {
        console.log("Access granted to: " + empName);
    }
}

let evaLogin = letEmployeeLogin("Eva");
evaLogin();

let adamLogin = letEmployeeLogin("Adam");
adamLogin();


//-----------------

const multiplyBy = (num1) => {

    return function(num2) {
        console.log(num1 * num2);
    }

}