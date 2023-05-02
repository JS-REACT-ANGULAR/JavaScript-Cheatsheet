const array = [1, 2, 3];

function getMaxNumber(arr) {
    let num1 = arr[0];
    for (const num of arr) {
        if (num > num1) {
            num1 = num
        }
    }
}

getMaxNumber(array) // should return 3