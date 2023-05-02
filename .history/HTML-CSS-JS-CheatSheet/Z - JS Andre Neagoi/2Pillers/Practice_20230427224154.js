console.log(new Date());

Date.prototype.lastYear = () => {
    return getFullYear() - 1;
}

let abc = new Date();

abc.lastYear() = () => {
    console.log("Last Year")
}

abc.lastYear()