//this keyword in JavaScript function indicats the object that function belongs to

function func1() {
    console.log(this + " : This function belongs to Global Windows Object. So this = Windows here")
}

let me = {
    name: "Devesh",
    myFunction: function() {
        console.log(this + " : This function belongs to me Object. So this = me here")
    }
}

func1();
Windows.func1(); //Can also be called as this. As this belongs to Windows onject

me.myFunction()



let person = {

    name: "Devesh",
    eat() {
        console.log("Devesh eats", this)

        function drink() {
            console.log("Devesh drinks", this);
        }
        drink();
    }

}

person.eat();