function getMyName() {

    let name = "Devesh";

    function getName() {
        return name + " Kumar";
    }


    return getName();


}

function findMyName() {
    return getMyName();
}

function printMyName() {
    findMyName();
}

printMyName();