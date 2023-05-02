const add2 = num => num + 2;
const deduct1 = num => num - 1;
const multiplyBy2 = num => num * 2;

let compose = (...functions) => {
    return (value) => {
        functions.reduceRight((previousFunc, currentFunction) => currentFunction(previousFunc), value)
    }
}