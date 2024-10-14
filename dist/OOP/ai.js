"use strict";
class ai_hewan {
    constructor(nama, kaki) {
        this.nama = nama;
        this.kaki = kaki;
    }
    bernafas() {
        console.log(`${this.nama} sedang bernafas, hewan ini mempunyai ${this.kaki} kaki.`);
    }
}
const hewan_ai = new ai_hewan('Kucing', 4);
hewan_ai.bernafas();
console.log(hewan_ai);
