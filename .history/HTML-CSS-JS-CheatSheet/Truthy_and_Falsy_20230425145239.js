if (NaN) {
    console.log("Truthy", Number("     "));
    console.log("Truthy", Number(""));
} else {
    console.log("Falsy");
}


5 + null // returns 5         because null is converted to 0
    "5" + null // returns "5null"   because null is converted to "null"
    "5" + 2 // returns "52"      because 2 is converted to "2"
    "5" - 2 // returns 3         because "5" is converted to 5
    "5" * "2" // returns 10        because "5" and "2" are converted to 5 and 2