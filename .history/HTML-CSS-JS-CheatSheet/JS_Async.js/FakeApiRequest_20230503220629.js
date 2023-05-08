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
//Second Request to url : "movie.com/page2" -- Only if request 1 is successfull
//Third Request to url : "movie.com/page3" -- Only if request 2 is successfull


fakeRequestCallback("movie.com/page1", (responseData) => {
    console.log(responseData);
    fakeRequestCallback("movie.com/page2", (responseData) => {
        console.log(responseData);
        fakeRequestCallback("movie.com/page3", (responseData) => {
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