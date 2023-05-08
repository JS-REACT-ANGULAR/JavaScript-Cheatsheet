let numbersArray = [101, 105];

let getNumbers = () => {
    console.log(numbersArray);
};

let pushAnotherNumber = (numberToPush, callback_function_to_get_numbers_array) => {
    setTimeout(() => {
        numbersArray.push(numberToPush);
        callback_function_to_get_numbers_array();
    }, 2000);
};

pushAnotherNumber(100, getNumbers);

getNumbers();

console.log("hello");