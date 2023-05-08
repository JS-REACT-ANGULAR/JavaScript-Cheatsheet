const myBool = true;

const promise = new Promise((resolve, reject) => {
    if (myBool) {
        resolve("Promise resolved");
    } else {
        reject("Promise Rejected")
    }
})