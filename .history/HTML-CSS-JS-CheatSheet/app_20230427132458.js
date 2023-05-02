function heavyDuty(index) {

    const bigArray = new Array(7000).fill("Hi");
    console.log("Created");

    return function getIndex() {
        return bigArray[index];
    }

}