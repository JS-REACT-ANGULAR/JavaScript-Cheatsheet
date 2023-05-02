function heavyDuty1() {

    const bigArray = new Array(7000).fill("Hi");
    console.log("Created");

    return function getIndex(index) {
        return bigArray[index];
    }
}




function heavyDuty2() {

    const bigArray = new Array(7000).fill("Hi");
    console.log("Created");

    return function getIndex(index) {
        return bigArray[index];
    }
}

const getIndex = heavyDuty2();
console.log(getIndex(100));