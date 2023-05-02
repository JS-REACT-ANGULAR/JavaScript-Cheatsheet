function init() {
    let counter = 0;
    let view;

    return function setView() {
        if (counter === 0) {
            view = "Nice View";
            console.log("View has been set.");
        } else {
            console.log("View already set.");

        }
    }

}

let abc = init();