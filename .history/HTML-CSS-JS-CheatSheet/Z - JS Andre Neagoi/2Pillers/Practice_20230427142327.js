let view;

function init() {
    let counter = 0;
    return function setView() {
        if (counter > 0) {
            console.log("View already set.");
        } else {
            view = "Nice View";
            counter++;
            console.log("View has been set.");
        }
    }
}


init()();
init()();
init()();