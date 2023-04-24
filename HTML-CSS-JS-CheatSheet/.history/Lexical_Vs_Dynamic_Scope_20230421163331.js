function getMyName() {
    function getName() {
        return "Devesh Kumar"
    }


    return "Devesh Kumar";


}

function findMyName() {
    return getMyName();
}

function printMyName() {
    findMyName();
}

printMyName(); //Devesh Kumar