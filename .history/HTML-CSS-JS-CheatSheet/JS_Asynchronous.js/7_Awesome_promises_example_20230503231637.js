function fetchData(url) {

    return new Promise((resolve, reject) => {
        fetch(url).then(response => resolve(response))
    })

}