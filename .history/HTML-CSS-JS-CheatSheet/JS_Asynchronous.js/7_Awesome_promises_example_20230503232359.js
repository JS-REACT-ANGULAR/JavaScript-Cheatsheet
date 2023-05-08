function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => resolve(response.json()))
            .catch(error => reject(error))
    })
}


fetchData("https://jsonplaceholder.typicode.com/users")
    .then(response => console.log(response))
    .catch(error => console.log(error))

// ---------------Promise All-----------------------


let promise1 = fetchData("https://jsonplaceholder.typicode.com/users");
let promise2 = fetchData("https://jsonplaceholder.typicode.com/users");
let promise3 = fetchData("https://jsonplaceholder.typicode.com/users");