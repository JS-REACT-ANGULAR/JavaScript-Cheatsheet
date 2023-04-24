function getMyName() {

    let name = "Devesh Kumar";

    function getName() {
        return name;
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