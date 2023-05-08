// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Sorry, Cant fetch date : Connection Timeout or Something')
        } else {
            success(`Here is your data from ${url}`)
        }
    }, delay)
}

//First request to url : "movie.com/page1"


fakeRequestCallback("movie.com/page1", (responseData) => {
    console.log(responseData);
    fakeRequestCallback("")
}, (error) => {
    console.log(error);
})