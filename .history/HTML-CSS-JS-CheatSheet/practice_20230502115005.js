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
        const element = newArray[i];
        newArray.map(num => num * 2)
    }
}


function func3(num) {
    console.log(num);
}