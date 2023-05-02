const add2 = num => num + 2;
const deduct1 = num => num - 1;
const multiplyBy5 = num => num * 5;


let beforeCompose = multiplyBy5(deduct1(add2(4)));
let beforePipe = add2(deduct1(multiplyBy5(4)))


let compose1 = (...functions) => {
    return function(value) {
        return functions.reduceRight((previousFunc, currentFunction) => {
            return currentFunction(previousFunc)
        }, value);
    }
}

let compose2 = (...functions) => value => function.reduceRight((previousFunc, currentFunction) => currentFunction(previousFunc), value);


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
let piped_1 = pipe1(multiplyBy5, deduct1, add2)(4)
let piped_2 = pipe2(multiplyBy5, deduct1, add2)(4)


console.log(beforeCompose);
console.log(composed_1);
console.log(composed_2);

console.log(beforePipe);
console.log(piped_1);
console.log(piped_2);