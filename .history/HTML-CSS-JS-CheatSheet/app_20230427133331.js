function heavyDuty1(index) {
    const bigArray = new Array(7000).fill("Hi");
    console.log("Created");
    return bigArray[index];
}

heavyDuty1(100); //Array is created and destryed
heavyDuty1(200); //Array is created and destryed
heavyDuty1(300); //Array is created and destryed





function heavyDuty2() {
    const bigArray = new Array(7000).fill("Hi");
    console.log("Created");
    return function getIndex(index) {
        return bigArray[index];
    }
}

const getHeavyDuty2 = heavyDuty2(); ////Array is created only here
getHeavyDuty2(100);
getHeavyDuty2(200);
getHeavyDuty2(300);