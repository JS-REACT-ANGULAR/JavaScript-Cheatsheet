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