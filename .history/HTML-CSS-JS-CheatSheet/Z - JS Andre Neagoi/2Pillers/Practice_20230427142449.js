let view;

function init() {
    let counter = 0;
    let increaseCounter = () => counter++;

    return function() {
        if (counter > 0) {
            console.log("View already set.");

        } else {
            view = "Nice View";
            increaseCounter();
            console.log("View has been set.");
        }
    }
}


// init()();
// init()();
// init()();

init()