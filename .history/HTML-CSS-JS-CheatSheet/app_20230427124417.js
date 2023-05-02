function callMe() {
    setTimeout(() => {
        console.log("Called you")
    }, 1)
}

callMe();

for (let index = 0; index < 1000000000; index++) {
    // if (index === 1000000000) {
    console.log("For Loop Completed")
        // }
}