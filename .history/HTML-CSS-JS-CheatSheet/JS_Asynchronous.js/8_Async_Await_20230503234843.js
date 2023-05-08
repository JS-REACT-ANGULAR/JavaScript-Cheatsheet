//Async Function always returns a promise

function abc() {}
async function xyz() {}

console.log(abc()); //undefined
console.log(xyz()); //Promise { undefined }



//If Async function returns a value. Then promise will be resolved with that value

async function sing() {
    return "I am singing"
}

sing()
    .then(response => console.log(response)) // I am Singing
    .catch(error => console.log(error))



//If Async function throws an Error/Exception, has an error/exception, the promise will be rejected

async function sing1() {
    throw new Error();
    return "I am singing"
}

sing1()
    .then(response => console.log(response)) // I am Singing
    .catch(error => console.log("Error Happened"))