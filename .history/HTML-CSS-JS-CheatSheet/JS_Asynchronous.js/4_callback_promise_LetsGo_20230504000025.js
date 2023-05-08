// ----------------------------------------------
//---------------Callback Example 1--------------

function letsGo1() {
    setTimeout(() => {
        console.log("Callback 1 : Let's Go 1 time.")
        setTimeout(() => {
            console.log("Callback 1 : Let's Go 2 time.")
            setTimeout(() => {
                console.log("Callback 1 : Let's Go 3 time.")
                setTimeout(() => {
                    console.log("Callback 1 : Let's Go 4 time.")
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}

letsGo1()

// ----------------------------------------------
//---------------Callback Example 2--------------


function letsGo2(number, delay, doThisNext) {
    setTimeout(() => {
        console.log("Callback 2 : Let's go " + number + " time");
        doThisNext && doThisNext()
    }, delay)
}

letsGo2(1, 1000, () => {
    letsGo2(2, 1000, () => {
        letsGo2(3, 1000, () => {
            letsGo2(4, 1000)
        })
    })
})

// ----------------------------------------------
//---------------Promise Example 1--------------

function letsGo3(number, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Inside Promise: Let's go " + number + " time");
            // resolve(console.log("Inside Promise: Let's go " + number + " time"))
            reject("Hey sorry, can't print let's go");
        }, delay)
    })
}

letsGo3(1, 1000)
    .then((message) => {
        console.log(message)
        return letsGo3(2, 1000);
    })
    .then((message) => {
        console.log(message)
        return letsGo3(3, 1000);
    })
    .then((message) => {
        console.log(message)
        return letsGo3(4, 1000);
    })
    .then((message) => {
        console.log(message)
    })
    .catch((err) => console.log(err))


// ----------------------------------------------
//---------------Async Await Example--------------


function letsGo3(number, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Inside Promise: Let's go " + number + " time");
            // resolve(console.log("Inside Promise: Let's go " + number + " time"))
            reject("Hey sorry, can't print let's go");
        }, delay)
    })
}

async function callLetsGo3() {
    await letsGo3(1, 1000);
    await letsGo3(2, 1000);
    await letsGo3(3, 1000);
    await letsGo3(4, 1000);
}