//Hoisting Happens only for those that start with words "function" or "var" 
//All variables wheather they are assigned with VAR or LET or CONST, all are hoisted. var with undefined
//Only Function declarations are hoisted not function expressions. In case of function expression only variable is hoisted
//For Example in case of greet1 and greet2, value will be undefined
//We can avoid hoisting problems by using LET and CONST



console.log(a); // undefined
console.log(b); // ReferenceError: Cannot access 'b' before initialization
console.log(c); // ReferenceError: Cannot access 'c' before initialization
console.log(d); //ReferenceError: d is not defined

var a = 10;
let b = 20;
const c = 30;




//Any Function expression (LET, CONST) will not be hoisted
//For the Function Expression starting with VAR only the variable will be hoisted with undefined value

// console.log(greet1)  //[Function: greet1]
// greet1()             //I am greet1

// console.log(greet2)  // undefined
// greet2()             //TypeError: greet2 is not a function

// console.log(greet3)  // undefined
//greet3()              //TypeError: greet3 is not a function

// console.log(greet4)  //ReferenceError: Cannot access 'greet4' before initialization
// greet4()             //ReferenceError: Cannot access 'greet4' before initialization

// console.log(greet5)  //ReferenceError: Cannot access 'greet5' before initialization
// greet5()             //ReferenceError: Cannot access 'greet5' before initialization

// console.log(greet6)  //ReferenceError: Cannot access 'greet6' before initialization
// greet6()             //ReferenceError: Cannot access 'greet6' before initialization

// console.log(greet7)  //ReferenceError: Cannot access 'greet7' before initialization
// greet7()             //ReferenceError: Cannot access 'greet7' before initialization


function greet1() { console.log("I am greet1") } //Entire Function is Hoisted

var greet2 = function() { console.log("var greet2 = function()" + " Hello") } //Only variable greet2 is hoisted

var greet3 = () => { console.log("var greet3 = () =>" + " Hello") } //Only variable greet3 is hoisted

let greet4 = function() { console.log("let greet4 = function()") } //Not Hoisted

let greet5 = () => { console.log("let greet5 = () =>") } //Not Hoisted

const greet6 = function() { console.log("const greet6 = function()") } //Not Hoisted

const greet7 = () => { console.log("const greet7 = () =>") } //Not Hoisted