//printMyName() function's lexical scope is Global Execution Context as it's located inside Global Execution Context
//findMyName() function's lexical scope is Global Execution Context as it's location is Global Execution Context
//getMyName() function's lexical scope is Global Execution Context as it's location is Global Execution Context
//getName() function's lexical scope is getMyName() Execution Context as it's location is inside getMyName() 

let a = 10;

function getMyName() {

    let name = "Devesh";

    function getName() {
        return name + " Kumar";
    }

    return getName();
}

function findMyName() {
    return getMyName();
}

function printMyName() {
    findMyName();
}

printMyName();