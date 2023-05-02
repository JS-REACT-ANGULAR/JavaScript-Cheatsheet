function init() {
    let counter = 0;
    let view;

    function setView() {
        counter++;
        view = "Nice View";
        console.log("View has been set.");
    }

    if (counter >= 1) {
        return () => console.log("View Is already set.")
    } else {
        return setView;
    }
}


init()();
init()();
init()();