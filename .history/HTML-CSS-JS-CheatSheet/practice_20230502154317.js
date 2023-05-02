const add2 = num => num + 2;
const deduct1 = num => num - 1;
const multiplyBy5 = num => num * 5;


let beforeCompose = multiplyBy5(deduct1(add2(4)));

let compose1 = (...functions) => {
    return function(value) {
        return functions.reduceRight((previousFunc, currentFunction) => {
            return currentFunction(previousFunc), value
        });
    }
}

let createCompose1 = compose1(multiplyBy5, deduct1, add2)(4)

console.log(createCompose1);
console.log(beforeCompose);

let compose2 = (...functions) => value => reduceRight((previousFunc, currentFunction) => currentFunction(previousFunc), value);