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

const startOnce = init();
startOnce();
startOnce();
startOnce();

//--------------------

const array = [1, 2, 3, 4];

for (var index = 0; index < array.length; index++) {
    ((index) => {
        setTimeout(function() {
            console.log(index)
        }, 3000)
    })(index)
}

for (var index = 0; index < array.length; index++) {
    ((index) => {
        setTimeout(function() {
            console.log(index)
        }, 3000)
    })(index)
}






for (var index = 0; index < array.length; index++) {
    setTimeout((function(index) {
        console.log(index)
    }).bind(this, index), 3000)
}