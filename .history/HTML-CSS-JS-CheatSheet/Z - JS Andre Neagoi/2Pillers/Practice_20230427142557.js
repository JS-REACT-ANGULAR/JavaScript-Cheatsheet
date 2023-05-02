let view;

function init() {
    let counter = 0;
    let increaseCounter = () => counter++;

    return function() {
        if (counter === 0) {
            view = "Nice View";
            increaseCounter();
            console.log("View has been set.");
        } else {
            console.log("View already set.");
        }
    }
}


// init()();
// init()();
// init()();

const startOnce = init();
startOnce();
startOnce();
startOnce();