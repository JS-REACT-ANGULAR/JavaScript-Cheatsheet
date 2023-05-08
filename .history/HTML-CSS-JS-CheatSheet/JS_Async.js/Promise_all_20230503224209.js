const promise1 = new Promise((resolve, reject) => {
    const myBool = true;
    if (myBool) {
        resolve("Promise 1 resolved");
    } else {
        reject("Promise 1 rejected");
    }
})

const promise2 = new Promise((resolve, reject) => {
    const myBool = true;
    if (myBool) {
        resolve("Promise 2 resolved");
    } else {
        reject("Promise 2 rejected");
    }
})

const promise3 = new Promise((resolve, reject) => {
    const myBool = true;
    if (myBool) {
        resolve("Promise 3 resolved");
    } else {
        reject("Promise 3 rejected");
    }
})

const promise4 = new Promise((resolve, reject) => {
    const myBool = true;
    if (myBool) {
        resolve("Promise 4 resolved");
    } else {
        reject("Promise 4 rejected");
    }
})

let promiseArray = [promise1, promise2, promise3, promise4];

Promise.all(promiseArray).then(values => {
        console.log(values); //Only if all promises are resolved, value will be displayed
    }).catch(error => console.log(error)) //Error will be printed even if 1 promise is rejected