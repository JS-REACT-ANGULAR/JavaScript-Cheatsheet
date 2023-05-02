let array = [2, 5, 8, 3, 4, 7];

let newArray = [];

array.forEach(num1 => newArray.push(num1 * 2))

console.log(newArray)

let mapArray = array.map(num1 => {
    return num1 * 2
})
console.log(mapArray);
console.log(array);

const filteredArray = array.filter(num1 => { return num1 > 3 });
console.log(filteredArray)

//REduce
const reduceArray = array.reduce((accumulator, num1) => { return accumulator + num1 }, 10);

console.log(reduceArray);