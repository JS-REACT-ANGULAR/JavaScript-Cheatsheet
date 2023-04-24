//printMyName() function's lexical scope is Global Execution Context as it's location is Global Execution Context



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