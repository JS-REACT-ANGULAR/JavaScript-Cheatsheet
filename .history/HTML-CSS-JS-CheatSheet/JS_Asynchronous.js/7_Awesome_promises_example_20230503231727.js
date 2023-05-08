function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}


fetchData("https://jsonplaceholder.typicode.com/users")