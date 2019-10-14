let task1 = function(number, array){

    for(let i = 0; i<array.length; i++) {
        if (array[i] === number){
            return "true"
        }

    }
    return "false"
}

console.log(task1(1,[3,2,1]))

//Nie modyfikujcie niżej kodu
//module.exports = {getNumber};
