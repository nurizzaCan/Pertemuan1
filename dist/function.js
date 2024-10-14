"use strict";
// function declaration
function add(x, y, z) {
    return x + y + z;
}
console.log(add(2, 4, 4));
// function expression
const add1 = function (x, y, z) {
    return x + y + z;
};
console.log(add1(12, 12, 12));
// Arrow Function
const add2 = (x, y, z) => x + y + z;
console.log(add2(11, 11, 11));
// Function dengan return type
const add3 = (a, b) => {
    return a + b;
};
console.log(add3(12, 12));
// void
const add4 = (a, b) => {
    console.log(`hasil dari a dan b ${a + b}`);
};
add4(12, 12);
