//printMyName() function's lexical scope is Global Execution Context as it's located inside Global & has access to Global Variables
//findMyName() function's lexical scope is Global Execution Context as it's located inside Global & has access to Global Variables
//getMyName() function's lexical scope is Global Execution Context as it's located inside Global & has access to Global Variables
//getName() function's lexical scope is getMyName() Execution Context as it's location is inside getMyName() & has access to Global/variables inside getMyName()

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