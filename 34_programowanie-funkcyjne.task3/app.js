/*let main = function(p1,p2,callback){
    if(typeof callback != 'function') {
        throw Error('callback param is not a function');
    }
    let randomNumber = Math.round((Math.random() * (p2-p1)) + p1 );
    callback(randomNumber)
}

let print = function(number){
    console.log(number);
};

main(1,5,print)

 */

let cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];

/*
let lettersCount = function(array) {
   let table = [];
   let counter = 0;
    for (let i = 0; i<array.length; i++){
        table[counter] = array[counter].length;
        counter++;
        }
    return table;
    };

 */

/*
let lettersCount = function(array) {
   return array.map(function (element) {
        return element.length
    })
}

 */

let lettersCount = array => array.map(element =>element.length)



let letters = lettersCount(cities);
console.log(letters);





