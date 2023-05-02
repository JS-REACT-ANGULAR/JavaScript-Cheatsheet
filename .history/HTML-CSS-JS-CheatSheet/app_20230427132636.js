function heavyDuty() {

    const bigArray = new Array(7000).fill("Hi");
    console.log("Created");

    return function getIndex(index) {
        return bigArray[index];
    }
}

const getIndex = heavyDuty();
console.log(getIndex(100));