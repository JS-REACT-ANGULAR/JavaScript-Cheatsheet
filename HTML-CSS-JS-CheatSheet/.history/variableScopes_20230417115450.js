//if a variable is defined without var, letor const anywhere in .js file. It becomes global variable. We should use "use strict" to avoid this.

//if a variable is defined with var. It has scope within the function it is defined in.

//if a variable is defined with let or const. It has scope within the block it is defined in.


function myFunction() {

    if (true) {
        let x = 15;
        let y = 20;

    }

    console.log()

}