
let array = [["Maria", "Jan", "Piotr"],
             [1,2,3,4,5,6]];

console.log("podpunkt a");
console.log(array[0][2]);

console.log("podpunkt b");
console.log(array[0][4]);

console.log("podpunkt c");
console.log(array[1].length);

console.log("podpunkt d");
let long = array.length;

for(let i = 0; i < long; i++) {

    console.log(array[i].length);
}

console.log("podpunkt e");



for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array[i].length; j++) {

        console.log(array[i][j]);

    }
}


