class Car {#
    seats = 0;
    constructor(name, seats) {
        this.name = name;
        this.#seats = seats;
    }
}


let car = new Car("Honda", 4);
console.log(car.seats);