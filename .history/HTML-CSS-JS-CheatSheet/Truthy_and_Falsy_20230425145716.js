if (NaN) {
    console.log("Truthy", Number("     "));
    console.log("Truthy", Number(""));
} else {
    console.log("Falsy");
}