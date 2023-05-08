function letsGo() {
    setTimeout(() => {
        console.log("Let's Go 1st time.")
        setTimeout(() => {
            console.log("Let's Go 2nd time.")
            setTimeout(() => {
                console.log("Let's Go 3rd time.")
                setTimeout(() => {
                    console.log("Let's Go 4th time.")
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}

letsGo()

// ------------------------------------------

function delayedLetsGo(number, delay) {

}