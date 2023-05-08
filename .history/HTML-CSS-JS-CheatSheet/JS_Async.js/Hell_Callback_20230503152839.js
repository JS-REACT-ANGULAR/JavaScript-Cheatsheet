function letsGo() {
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

// letsGo()

// ------------------------------------------

function delayedLetsGo(number, delay, doThisNext) {
    setTimeout(() => {
        console.log("Let's go " + number + " time");
        doThisNext && doThisNext()
    }, delay)
}

delayedLetsGo(1, 1000, () => {
    delayedLetsGo(2, 1000, () => {
        delayedLetsGo(3, 1000, () => {
            delayedLetsGo(4, 1000)
        })
    })
})

delayedLetsGo(1, 1000, delayedLetsGo(2, 1000, delayedLetsGo(3, 1000, delayedLetsGo(4, 1000))))