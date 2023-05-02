function func1(num1, num2) {
    return num1 + num2
}


function func1(num) {
    console.log(num);
}


let str = "I am Devesh";

function func3() {
    return str + " Kumar";
}


let array = [1, 2, 3]

function func2() {
    let newArray = [...array];
    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = newArray[i] * 2
    }

    return newArray;
}

console.log(array); //[ 1, 2, 3 ]
console.log(func2()); // [ 2, 4, 6 ]