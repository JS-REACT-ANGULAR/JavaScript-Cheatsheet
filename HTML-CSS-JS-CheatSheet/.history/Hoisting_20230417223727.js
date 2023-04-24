//Only the Variable declaration is hoisted not their assigned values
//All variables wheather they are assigned with VAR or LET or CONST, all are hoisted


greet1("Devesh")


function greet1() {
    console.log("Inside greet 1")
}

var greet2 = function() {
    console.log("Inside greet 2")
}

var greet3 = () => {
    console.log("Inside greet 3")
}





//ReferenceError: a is not defined

//ReferenceError: Cannot access 'a' before initialization