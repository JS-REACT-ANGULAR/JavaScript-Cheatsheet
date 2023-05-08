let numbersArray = [101, 105];

let getNumbers = () => {
    console.log(numbersArray);
};

//When  pushAnotherNumber is called it says
//pushAnotherNumber : Ok fine. Call me and give me a number to add to array
//However I will return a promise to add number to array. Number can be added or not added
//If number is added promise is resolved, if not then it is rejected


let pushAnotherNumber = (numberToPush) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numbersArray.push(numberToPush));
            reject();
        }, 2000);
    });
};

pushAnotherNumber(100)
    .then(() => {
        getNumbers();
    })
    .catch((err) => {
        console.log(err);
    });

getNumbers();

console.log("hello");