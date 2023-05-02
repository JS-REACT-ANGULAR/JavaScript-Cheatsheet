const makePositive = (num) => Math.abs(num);
const multiplyBy10 = (num) => num * 10;

const compose = (makePositive, multiplyBy10) => {
    return (num) => {
        multiplyBy10(makePositive(num))
    }
}



makePositiveAndMultiplyBy10(-5);