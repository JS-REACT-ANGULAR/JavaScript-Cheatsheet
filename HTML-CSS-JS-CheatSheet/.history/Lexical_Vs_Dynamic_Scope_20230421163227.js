function getMyName() {
    var myName = "Devesh Kumar";
    return myName;
}

function findMyName() {
    return getMyName();
}

function printMyName() {
    findMyName();
}

printMyName(); //Devesh Kumar