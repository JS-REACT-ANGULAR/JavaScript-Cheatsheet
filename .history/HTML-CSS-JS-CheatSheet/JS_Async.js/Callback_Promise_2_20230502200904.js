const promise1 = new Promise((resolve, reject) => {
    if (true) {
        resolve("Promise 1 resolved");
    } else {
        reject("Promise 1 rejected");
    }
})

const promise2 = new Promise((resolve, reject) => {
    const myBool = false;
    if (myBool) {
        resolve("Promise 2 resolved");
    } else {
        reject("Promise 2 rejected");
    }
})

const promise3 = new Promise((resolve, reject) => {
    const myBool = false;
    if (myBool) {
        resolve("Promise 3 resolved");
    } else {
        reject("Promise 3 rejected");
    }
})

const promise4 = new Promise((resolve, reject) => {
    const myBool = false;
    if (myBool) {
        resolve("Promise 3 resolved");
    } else {
        reject("Promise 3 rejected");
    }
})