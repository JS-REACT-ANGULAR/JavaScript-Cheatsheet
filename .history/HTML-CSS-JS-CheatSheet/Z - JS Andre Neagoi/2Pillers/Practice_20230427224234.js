console.log(new Date());

Date.prototype.lastYear = function() {
    return getFullYear() - 1;
}

let abc = new Date();

console.log(abc.lastYear());