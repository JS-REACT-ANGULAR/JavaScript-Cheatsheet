//Every function in JS file has it's own EXECUTION CONTEXT
//Before even that Every JS File starts with GLOBAL execution Context
//Global Execution Context starts with a global variable WINDOWS (GLOBAL with node) and THIS
//Every Execution context has 2 parts. Creation Phase and Execution Phase
//Creation Phase is where hoisting happens
//Execution Phase then runs code.
//We can avoid hoisting problems by using LET and CONST

//In the example below 5 execution context are created. Every Execution Context has it's own hoisting 
//For below code following Execution Contexts are created on Call Stack

//getMyName
//findMyName
//printMyName
//Global

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