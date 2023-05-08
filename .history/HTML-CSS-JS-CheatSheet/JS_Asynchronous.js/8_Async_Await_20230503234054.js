//Async Function always returns a promise

function abc() {}
async function xyz() {}

console.log(abc()); //undefined
console.log(xyz()); //Promise { undefined }

//If Async function returns a value. Then promise will be resolved with that value

async function sing() {}


//If the function throws an exception, the promise will be rejected