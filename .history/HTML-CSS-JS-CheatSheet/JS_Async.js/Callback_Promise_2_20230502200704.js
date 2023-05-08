const promise1 = new Promise((resolve, reject) => {
    if (true) {
        resolve("Promise 1 resolved");
    } else {
        reject("Promise 1 rejected");
    }

})