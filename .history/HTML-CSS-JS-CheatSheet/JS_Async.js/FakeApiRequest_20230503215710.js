// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Sorry, Cant fetch date : Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

fakeRequestCallback("movie.com", (suuceesMessage) => {
    console.log(suuceesMessage);
}, (errorMessage) => {
    console.log(errorMessage);
})