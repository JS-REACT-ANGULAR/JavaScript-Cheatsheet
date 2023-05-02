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

    getInfo() {
        console.log(this.name + " is a student of " + this.age + " age. And from this  " + this.country);

    }

}

class Teacher extends Person {
    constructor(name, age, experience) {
        super(name, age) {
            this.experience = experience;
        }
    }

}

let person = new Person("Devesh", 30);
let student = new Student("Sumit", 25);
let teacher = new Teacher("Priyanka", 29);

person.getInfo();
person.eat();
student.getInfo()
student.eat();
teacher.getInfo();