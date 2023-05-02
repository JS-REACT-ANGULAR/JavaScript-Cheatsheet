const add2 = num => num + 2;
const deduct1 = num => num - 1;
const multiplyBy5 = num => num * 5;

let compose1 = (...functions) => {
    return (value) => {
        return functions.reduce((previousFunc, currentFunction) => currentFunction(previousFunc), value);
    }
}

let createCompose = compose1(multiplyBy5, deduct1, add2)(4)

console.log(createCompose);