function letsGo1() {
    setTimeout(() => {
        console.log("Let's Go 1 time.")
        setTimeout(() => {
            console.log("Let's Go 2 time.")
            setTimeout(() => {
                console.log("Let's Go 3 time.")
                setTimeout(() => {
                    console.log("Let's Go 4 time.")
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}

// letsGo1()

// ------------------------------------------

function letsGo2(number, delay, doThisNext) {
    setTimeout(() => {
        console.log("Let's go " + number + " time");
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

function letsGo3(number, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Let's go " + number + " time"));
            reject();
        }, delay)
    })
}

letsGo3(1, 1000)
    .then(() => letsGo3(2, 1000))
    .then(() => letsGo3(3, 1000))
    .then(() => letsGo3(4, 1000))
    .catch((err) => console.log(err))