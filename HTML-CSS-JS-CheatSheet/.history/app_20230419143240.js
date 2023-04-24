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

printMyName(); //Devesh Kumar
console.log("--------------")
console.log(global)
console.log("--------------")
console.log(this === global)