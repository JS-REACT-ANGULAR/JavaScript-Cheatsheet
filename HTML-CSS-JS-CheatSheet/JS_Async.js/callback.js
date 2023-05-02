let numbersArray = [101, 105];

let getNumbers = () => {
    console.log(numbersArray);
};

let pushAnotherNumber = (numberToPush, getNumbers) => {
    setTimeout(() => {
        numbersArray.push(numberToPush);
        getNumbers();
    }, 2000);
};

pushAnotherNumber(100, getNumbers);

getNumbers();

console.log("hello");