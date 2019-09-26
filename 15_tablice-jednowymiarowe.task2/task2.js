function multiply(array) {
    let result = 1;
    for(let i = 0; i <= array.length-1; i++) {

        result = result * array[i];

    }
    console.log(result);
    return result;
}

let g = [1,2,3,4,5,6,7]
multiply(g)


