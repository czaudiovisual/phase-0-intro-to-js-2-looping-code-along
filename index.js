// Code your solutions in this file


// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     // debugger;
//   }


// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     // debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);


// writeCards(["Ada", "Brendan", "Ali"], "birthday");

const name = ['Lisa', 'Kaitlin', 'Jan'];
const event = 'surprise';

function writeCards(name, event) {
    let newArray=[];
    for (let m = 0; m < name.length; m++) {
        newArray.push(`Thank you, ${name[m]}, for the wonderful ${event} gift!`);
        // debugger;
    }
    return newArray;
}
writeCards(name, event);


// for (let countDown = 10; countDown > 0; countDown--) {
//     console.log(countDown);
// }

// let countDown = 10;
// while (countDown > 0) {
//     console.log(countDown--);
// }

function countDown(int = 10){
    while (int >= 0) {
        console.log(int--);
        // debugger;
    }
    

}