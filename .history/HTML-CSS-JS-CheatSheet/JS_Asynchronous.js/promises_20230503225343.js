let numbersArray = [101, 105];

let getNumbers = () => {
    console.log(numbersArray);
};

//When  pushAnotherNumber is called it says

//pushAnotherNumber : Ok fine. Call me and give me a number to add to array
//However I will return a promise to add number to array. Number can be added or not added
//If number is added promise is resolved, if number is not added then promise is rejected
//Whoever calls me need to check if promise is resolved or rejected
//you can use .then() to check if it's resolved and .catch to check rejection


let pushAnotherNumber = (numberToPush) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(() => {
                numbersArray.push(numberToPush)
                return "Resolved Promise";
            });
            reject("Hey Number could not be pushed in array");
        }, 2000);
    });
};

pushAnotherNumber(100) // Ok fine I will call you pushAnotherNumber() and check on rejection or resolve
    .then((message) => {
        console.log(message);
        display_Numbers_Array(); // if it's resolved which means if number's added. I will chcek by printing here
    })
    .catch((err) => {
        console.log(err);
    });

display_Numbers_Array();

console.log("hello");