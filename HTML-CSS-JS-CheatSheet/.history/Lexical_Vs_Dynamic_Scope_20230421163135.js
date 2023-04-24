var myName = "Devesh"

function getMyName() {
    console.log(myName); //undefined //Why because here myName is not coming from global but 
    //getMyName Execution context. Where myName is hoisted with value undefined
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