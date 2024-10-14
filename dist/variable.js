"use strict";
let nama = "icanganteng";
console.log("Nama: ", nama);
let umur = 35;
console.log("umur: ", umur);
let mahasiswa = true;
console.log("ini Mahasiswa", mahasiswa);
let matrix;
matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log(matrix);
// type inference
let result = 123;
let result1 = "123";
console.log(typeof result);
console.log(typeof result1);
let matrix2;
matrix2 = [
    123,
    123
];
console.log(matrix2);
let matrix1;
matrix1 = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log(matrix1);
// object
let person = {
    name: "izza",
    age: 15
};
console.log("Person", person);
//any
let randomValue = 10;
console.log("Random nila (number): ", randomValue);
randomValue = "Hello";
console.log("Random nila (number): ", randomValue);
randomValue = true;
console.log("Random nila (number): ", randomValue);
//Enum
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
let favoriteColor = Color.red;
console.log(favoriteColor);
// Tuple
let myTuple = [10, "Hello"];
console.log(myTuple[0]);
console.log(myTuple[1]);
// Union
let typeUnion;
typeUnion = 101;
console.log("identifier (Number):", typeUnion);
console.log("identifier (String):", typeUnion);
console.log("identifier (Boolen):", typeUnion);
