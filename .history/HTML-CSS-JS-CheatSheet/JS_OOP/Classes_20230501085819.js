class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating food.`)
    }

    getAge() {
        console.log(this.name + " is of " + this.age + " age.");
    }
}