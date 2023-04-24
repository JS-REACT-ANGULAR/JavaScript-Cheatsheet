//this keyword in JavaScript function indicats the object that function belongs to

function func1() {
    console.log(this)
}

let me = {
    name: "Devesh",
    myFunction: function() {
        console.log(this)
    }
}

func1();
global.func1(); //Can also be called as this. As this belongs to Windows onject

me.myFunction()