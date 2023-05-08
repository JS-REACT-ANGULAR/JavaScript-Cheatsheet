// THE CALLBACK VERSION
const fetchMovies = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Sorry, Cant fetch data : Connection Timeout or Something')
        } else {
            success(`Here is your Movie from ${url}`)
        }
    }, delay)
}

//First request to url : "movie.com/page1"
//Second Request to url : "movie.com/page2" -- Only if request 1 is successfull
//Third Request to url : "movie.com/page3" -- Only if request 2 is successfull
//if we have to go a litte further--Callback Hell

fetchMovies("movie.com/page1", (responseData) => {
    console.log(responseData);
    fetchMovies("movie.com/page2", (responseData) => {
        console.log(responseData);
        fetchMovies("movie.com/page3", (responseData) => {
            console.log(responseData);
        }, (error) => {
            console.log(error);
        })
    }, (error) => {
        console.log(error);
    })
}, (error) => {
    console.log(error);
})