const makePositive = (num) => Math.abs(num);
const multiplyBy10 = (num) => num * 10;

const compose = (makePositive, multiplyBy10) => {
    return (num) => {
        return multiplyBy10(makePositive(num));
    }
}



console.log(makePositiveAndMultiplyBy10(-5));