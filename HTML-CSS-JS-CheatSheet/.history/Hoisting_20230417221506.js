//Only the Variable declaration is hoisted not their assigned values
//All variables wheather they are assigned with VAR or LET or CONST, all are hoisted


greet("Devesh")


function greet(name) {
    console.log("Hello " + name)
}


//ReferenceError: a is not defined

//ReferenceError: Cannot access 'a' before initialization