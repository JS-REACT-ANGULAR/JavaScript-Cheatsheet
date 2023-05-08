const promise1 = new Promise((resolve, reject) => {
    if (true) {
        resolve("Promise 1 resolved");
    } else {
        reject("Promise 1 rejected");
    }
})

const promise2 = new Promise((resolve, reject) => {
    const myBool = false;
    if (true) {
        resolve("Promise 2 resolved");
    } else {
        reject("Promise 1 rejected");
    }
})