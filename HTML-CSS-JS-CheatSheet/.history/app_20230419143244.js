var myName = "Devesh"

function getMyName() {
    console.log(myName);
    var myName = "Devesh Kumar";
    return myName;
}

function findMyName() {
    console.log("Printing: " + myName);
    return getMyName();
}

function printMyName() {
    console.log(findMyName());
}

printMyName();