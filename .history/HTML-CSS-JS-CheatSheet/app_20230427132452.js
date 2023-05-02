function heavyDuty(index) {

    const bigArray = new Array(7000).fill("Hi");
    console.log("Created");

    function getIndex() {
        return bigArray[index];
    }

}