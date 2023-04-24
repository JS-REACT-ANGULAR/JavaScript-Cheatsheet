function getMyName() {
    return "Devesh Kumar";

}

function findMyName() {
    return getMyName();
}

function printMyName() {
    findMyName();
}

printMyName(); //Devesh Kumar