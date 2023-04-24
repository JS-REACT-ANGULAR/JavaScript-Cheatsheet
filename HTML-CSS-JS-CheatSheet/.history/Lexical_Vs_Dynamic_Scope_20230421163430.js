function getMyName() {

    let name = "Devesh";

    function getName() {
        return name + " Kumar";
    }


    return "Devesh Kumar";


}

function findMyName() {
    return getMyName();
}

function printMyName() {
    findMyName();
}

printMyName();