let numbersArray = [101, 105];

let getNumbers = () => {
    console.log(numbersArray);
};

//When  pushAnotherNumber is called it says
//pushAnotherNumber : Ok fine. Call me and give me a number to add to array

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