class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating food.`)
    }

    getInfo() {
        console.log(this.name + " is of " + this.age + " age.");
    }
}


class Student extends Person {
    constructor(name, age, country) {
        super(name, age)
        this.country = country;
    }

    getAge() {
        console.log(this.name + " is a student of " + this.age + " age. And from this  " + this.country);

    }

}

class Teacher extends Person {
    constructor(name, age, experience) {
        super(name, age) {

        }
    }
}