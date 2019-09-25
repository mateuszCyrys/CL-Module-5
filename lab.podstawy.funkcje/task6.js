function createArray(rows) {
    let array = [];

    for (let i = 0; i < rows; i++) {
        array[i] = i+1;

    }
    console.log(array);
    return array
}


createArray(5)


//Nie modyfikujcie niżej kodu
module.exports = {createArray};
