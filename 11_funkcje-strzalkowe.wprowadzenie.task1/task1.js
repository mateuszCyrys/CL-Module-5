

function getNumber(number, arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == number){
            return true;
        }
    }
    return false;
}


//new
let sumTwo = (num1, num2) => num1 + num2 ;
//old
function sumTwo(num1, num2){
    return num1 + num2;
}
let printarray = (array) =>
let printArray = function(array) {
    for(let i=0; i<array.length; i++){
        console.log(array[i]);
    }
}

//Przykład z metody iteracyjnej forEach - będą te metody omawiane w kolejnych działach m.in. przy programowaniu funkcyjnym
//Przykład abyście zobaczyli jak można ładnie skrócić kod ;)


let printArrayValues = (array) => {
    array.forEach(element => {
        console.log(element);
    })
};

//
//Wywołania
console.log("getNumber");
let result1 = getNumber(2, [1,2,3,5,3,2,5]);
console.log(result1);

console.log("sumTwo");
let result2 = sumTwo(2,3);
console.log(result2);

console.log("printArray");
printArray(["Ala", "Zosia","Ewa","Piotr","Darek"]);

console.log("prinArrayValues");
printArrayValues(["Ala", "Zosia","Ewa","Piotr","Darek"]);
