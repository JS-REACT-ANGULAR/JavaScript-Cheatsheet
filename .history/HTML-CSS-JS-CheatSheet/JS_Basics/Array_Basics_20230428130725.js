let array = [2, 5, 8];

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