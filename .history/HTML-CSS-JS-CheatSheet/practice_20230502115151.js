function func1(num1, num2) {
    return num1 + num2
}


function func1(num) {
    console.log(num);
}

let array = [1, 2, 3]

function func2(num) {
    let newArray = [...array];
    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = newArray[i] * 2
    }

    return newArray;
}


console.log(func2);


function func3(num) {
    console.log(num);
}