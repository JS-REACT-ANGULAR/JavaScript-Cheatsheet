var myName = "Devesh"

function getMyName() {
    console.log(myName);
    var myName = "Devesh Kumar";
    return myName;
}

function findMyName() {
    console.log("Printing: " + myName); //Printing: Devesh
    return getMyName();
}

function printMyName() {
    console.log(findMyName()); //Devesh Kumar
}

printMyName(); //Devesh Kumar
console.log("--------------")
console.log(global)
console.log("--------------")
console.log(this === global)