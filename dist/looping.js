"use strict";
for (let i = 0; i <= 5; i++) {
    console.log(`for loop: ${i}`);
}
for (let a = 5; a > 2; a--) {
    console.log(`for loop2: ${a}`);
}
let p = 0;
for (p; p <= 5; p++) {
    if (p == 4) {
        console.log('berhenti disini');
        break;
    }
    console.log(p);
}
//while loop
let hasil = 0;
while (hasil < 5) {
    console.log(`While Loop: ${hasil}`);
    hasil++;
}
