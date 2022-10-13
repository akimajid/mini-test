// looping number 1 to 100

let  maxNumber = 100
let i = 1

// i bisa dibagi habis 3 dicetak "tiga"
// i bisa dibagi habis 5 dicetak "lima"
// i bisa dibagi habis 3 dan 5 dicetak "tigaLima"

for (let i = 1; i <= maxNumber; i++) {
    // condition angka habis dibagi 3 dan 5
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("TigaLima") 
    // condition angka habis dibagi 3 
    } else if (i % 3 == 0) {
        console.log("Tiga")
    // condition angka habis dibagi 5
    } else if (i % 5 == 0) {
        console.log("Lima")
    // condition angka yang tidak habis dibagi 3 atau 5
    } else {
        console.log(i)
    }
}

// write (node mini-test) in console to run code