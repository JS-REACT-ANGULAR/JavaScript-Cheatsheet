//if a variable is defined without var, letor const anywhere in .js file. It becomes global variable. We should use "use strict" to avoid this.

//if a variable is defined with var. It has scope within the function it is defined in.

//if a variable is defined with let or const. It has scope within the block it is defined in.


function myFunction() {

    if (true) {
        x = 15; //Accessible anywhere in .js
        var y = 20; //Accessible anywhere inside myFunction
        let z = 25; //Accessible only inside the if block
    }

    console.log(x);
    console.log(y);
    console.log(z);
}

myFunction();

console.log(x);
console.log(y);
console.log(z);