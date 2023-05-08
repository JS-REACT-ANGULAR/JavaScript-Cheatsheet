function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => resolve(response.json()))
            .catch(error => reject(error))
    })
}


// fetchData("https://jsonplaceholder.typicode.com/users")
//     .then(response => console.log(response))
//     .catch(error => console.log(error))

// ---------------Promise All-----------------------


let promise1 = fetchData("https://jsonplaceholder.typicode.com/users");
let promise2 = fetchData("https://jsonplaceholder.typicode.com/users");
let promise3 = fetchData("https://jsonplaceholder.typicode.com/users");

// Promise.all waits for all promises to resolve and returns an array of their results. If any of the given promises rejects, it becomes the error of Promise.all, and all other results are ignored.
// Promise.all([promise1, promise2, promise3]).then(result => console.log(result));

// Promise.allSettled waits for all promises to settle and returns their results as an array of objects, and they can be individually either resolved or rejected.
// Promise.allSettled([promise1, promise2, promise3]).then(result => console.log(result));

//Promise.race – It will return the promise instance which is firstly resolved or rejected.
// Promise.race([promise1, promise2, promise3]).then(result => console.log(result));


// -----------------------Async Await--------------
let fetchData2 = async(url) => {
    // try {
    //     let data = await fetch(url);
    //     console.log(data.json());
    //     return data.json();
    // } catch (error) {
    //     throw error;
    // }

    return (await fetch(url)).json();

}


fetchData2("https://jsonplaceholder.typicode.com/users")
    .then(response => console.log(response.json()))
    .catch(error => console.log(error))