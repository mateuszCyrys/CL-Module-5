//Piszcie kod pod tym komentarzem.

function createArray(number) {
    let newArray = [];

    for(let counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}



console.log("tablica z liczbami do 6 = " + createArray(6));
console.log("tablica z liczbami do 1 = " + createArray(1));
console.log(createArray(-6));
console.log(createArray(0));



