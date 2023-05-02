const add2 = num => num + 2;
const deduct1 = num => num - 1;
const multiplyBy5 = num => num * 5;


let beforeCompose = multiplyBy5(deduct1(add2(4)));
let beforePipe = multiplyBy5(deduct1(add2(4)));


let compose1 = (...functions) => {
    return function(value) {
        return functions.reduceRight((previousFunc, currentFunction) => {
            return currentFunction(previousFunc)
        }, value);
    }
}

let compose2 = (...functions) => value => reduceRight((previousFunc, currentFunction) => currentFunction(previousFunc), value);


let pipe1 = (...functions) => {
    return function(value) {
        return functions.reduce((previousFunc, currentFunction) => {
            return currentFunction(previousFunc)
        }, value);
    }
}

let pipe2 = (...functions) => value => reduce((previousFunc, currentFunction) => currentFunction(previousFunc), value);

let composed_1 = compose1(multiplyBy5, deduct1, add2)(4)
let composed_2 = compose1(multiplyBy5, deduct1, add2)(4)
let piped_1 = compose1(multiplyBy5, deduct1, add2)(4)
let piped_2 = compose1(multiplyBy5, deduct1, add2)(4)


console.log(createCompose1);
console.log(beforeCompose);