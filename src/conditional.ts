let num: number = 5

if (num > 6){
    console.log("kondisi pertama")
}else if(num > 3){
    console.log('kondisi ke dua')   
}else{
    console.log('Kondisi ke tiga')
}

// Switch case

console.log("\nSwitch case");


let day: number = 3;
let dayName: string;

switch (day) {
    case 1:
        dayName = "Senin";
        break;
    case 2:
        dayName = "Selasa";
        break;
    case 3:
        dayName = "Rabu";
        break;
    case 4:
        dayName = "Kamis";
        break;
    case 5:
        dayName = "Jum'at";
        break;
    case 6:
        dayName = "Sabtu";
        break;
    case 7:
        dayName = "Minggu";
        break;
    default:
        dayName = "Hari tidak valid";
}
console.log(`Hari ke ${day}: ${dayName}`);
