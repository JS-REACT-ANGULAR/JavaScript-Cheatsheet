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

function letsGo3(delay) {
    return new Promise(() => {

    })
}