function init() {
    let view;

    let counter = 0;

    return function() {

        if (counter === 0) {
            view = "Nice View";
            console.log("View has been set.");
        } else {
            console.log("View already set.");
        }

        counter++;
    }
}


// init()();
// init()();
// init()();

const startOnce = init();
startOnce();
startOnce();
startOnce();