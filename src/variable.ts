let nama: string = "icanganteng";
console.log("Nama: ",nama);

let umur: number = 35
console.log("umur: ",umur);

let mahasiswa : boolean = true;
console.log("ini Mahasiswa", mahasiswa);

let matrix : number[][]
matrix = [
    [1,2],
    [3,4],
    [5,6]
]
console.log(matrix);

// type inference
let result = 123;
let result1= "123"
console.log(typeof result);
console.log(typeof result1);


let matrix2: Array<number>
matrix2 = [
    123,
    123
]
console.log(matrix2);

let matrix1: Array<Array<number>>;
matrix1 = [
    [1,2],
    [3,4],
    [5,6]
];
console.log(matrix1);

// object

let person: { name: string; age: number} = {
    name: "izza",
    age: 15
};
console.log("Person", person);

//any
let randomValue : any = 10;
console.log("Random nila (number): ", randomValue);
randomValue = "Hello"
console.log("Random nila (number): ", randomValue);
randomValue = true
console.log("Random nila (number): ", randomValue);

//Enum
enum Color{
    red,
    green,
    blue
}

let favoriteColor: Color = Color.red;
console.log(favoriteColor);

// Tuple

let myTuple: [number, string] = [10, "Hello"]
console.log(myTuple[0]);
console.log(myTuple[1]);

// Union

let typeUnion: string | number | boolean;
typeUnion = 101
console.log("identifier (Number):", typeUnion);
console.log("identifier (String):", typeUnion);
console.log("identifier (Boolen):", typeUnion);