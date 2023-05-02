function init() {
    let counter;
    let view;

    return function setView() {
        if (counter === 0) {
            view = "Nice View";
            console.log("View has been set.");
        } else {
            console.log("View already set.");
        }
        counter++;
    }

}


init()();
init()();
init()();