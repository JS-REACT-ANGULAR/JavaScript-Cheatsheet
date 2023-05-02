console.log(new Date());

Date.prototype.lastYear = () => {
    return getFullYear() - 1;
}

let abc = new Date();

console.log(abc.lastYear());