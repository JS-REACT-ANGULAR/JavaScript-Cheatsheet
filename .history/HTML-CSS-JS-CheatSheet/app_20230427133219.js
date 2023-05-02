function heavyDuty1(index) {
    const bigArray = new Array(7000).fill("Hi");
    console.log("Created");
    return bigArray[index];
}

heavyDuty1(100);



function heavyDuty2() {
    const bigArray = new Array(7000).fill("Hi");
    console.log("Created");
    return function getIndex(index) {
        return bigArray[index];
    }
}

const getHeavyDuty2 = heavyDuty2();
console.log(getHeavyDuty2(100));