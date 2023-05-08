const myBool = false;

const promise = new Promise((resolve, reject) => {
    if (myBool) {
        resolve("Promise resolved");
    } else {
        reject("Promise Rejected")
    }
})


promise.then(result => console.log(result)).catch(error => console.log(error));