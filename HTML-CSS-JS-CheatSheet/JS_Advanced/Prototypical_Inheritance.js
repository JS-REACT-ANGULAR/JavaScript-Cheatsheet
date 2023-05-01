let human = {
    mortal: true
}

let sam = {};
sam.__proto__ = human; //Create sam object and set prototype

//OR

let sam = Object.create(human) //Always use this

sam.age = 30; //added sam's own property

console.log(sam.mortal); //true

console.log(sam.hasOwnProperty("mortal")); // false as mortal is inherited property
console.log(sam.hasOwnProperty("age")); //true as age is sam's own property
console.log(human.isPrototypeOf("sam")); //true as human is sam's prototype (parent)


let array = [];
console.log(array.hasOwnProperty("map")); // false as map is array's prototype property
console.log(array.__proto__.hasOwnProperty("map")); // true as map is array's prototype property