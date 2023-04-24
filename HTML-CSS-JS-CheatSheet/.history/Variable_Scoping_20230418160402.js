//if a variable is defined without var, letor const anywhere in .js file. It becomes global variable. We should use "use strict" to avoid this.
//if a variable is defined with var. It has scope within the function it is defined in.
//if a variable is defined with let or const. It has scope within the block it is defined in.
//Lexical Scoping : 

//var = Immediate function scope
//let = Immediate Block scope

let a = "I am global a";

function myFunction() {
    let a = "I am a inside myFunction";
    if (true) {
        x = 15; //Accessible anywhere in .js
        var y = 20; //Accessible anywhere inside myFunction
        let z = 25; //Accessible only inside the if block
    }
    console.log(a); //I am a inside myFunction
    console.log(x); //15
    console.log(y); //20
    console.log(z); //ReferenceError: z is not defined
}

myFunction();

console.log(a); //I am global a
console.log(x); //15
console.log(y); //ReferenceError: y is not defined
console.log(z); //ReferenceError: z is not defined


//------------------------------------------