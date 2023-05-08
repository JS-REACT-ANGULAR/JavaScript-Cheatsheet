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


fetchData("https://jsonplaceholder.typicode.com/users");
fetchData("https://jsonplaceholder.typicode.com/users");
fetchData("https://jsonplaceholder.typicode.com/users");