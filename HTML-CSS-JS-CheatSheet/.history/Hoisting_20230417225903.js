//Only the Variable declaration is hoisted not their assigned values
//All variables wheather they are assigned with VAR or LET or CONST, all are hoisted

// console.log(greet1) //[Function: greet1]
// greet1() //function greet1()

// console.log(greet2)
// greet2()

// console.log(greet3)
// greet3()

// console.log(greet4)
// greet4()

// console.log(greet5)
// greet5()

// console.log(greet6)
// greet6()

// console.log(greet7)
// greet7()

function greet1() {
    console.log("function greet1()")
}

var greet2 = function() {
    console.log("var greet2 = function()" + "Hello")
}

var greet3 = () => {
    console.log("var greet3 = () =>" + "Hello")
}


let greet4 = function() {
    console.log("let greet4 = function()")
}

let greet5 = () => {
    console.log("let greet5 = () =>")
}

const greet6 = function() {
    console.log("const greet6 = function()")
}

const greet7 = () => {
    console.log("const greet7 = () =>")
}


//ReferenceError: a is not defined

//ReferenceError: Cannot access 'a' before initialization

greet4();