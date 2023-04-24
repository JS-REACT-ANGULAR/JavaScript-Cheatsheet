class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
}