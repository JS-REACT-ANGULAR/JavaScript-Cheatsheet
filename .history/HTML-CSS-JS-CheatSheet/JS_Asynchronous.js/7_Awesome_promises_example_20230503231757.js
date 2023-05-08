function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}


let users = fetchData("https://jsonplaceholder.typicode.com/users")
console.log(users);