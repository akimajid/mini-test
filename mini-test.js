// looping number 1 to 100

let  maxNumber = 100
let i = 1

// i bisa dibagi habis 3 dicetak "tiga"
// i bisa dibagi habis 5 dicetak "lima"
// i bisa dibagi habis 3 dan 5 dicetak "tigaLima"

for (let i = 1; i <= maxNumber; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("TigaLima")
    } else if (i % 3 == 0) {
        console.log("Tiga")
    } else if (i % 5 == 0) {
        console.log("Lima")
    } else {
        console.log(i)
    }
}

// write (node mini-test) in console to run code