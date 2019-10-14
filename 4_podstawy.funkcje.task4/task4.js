function getMissingElement(array){

    for(let i = 1; i<=array.length; i++) {
        if(array[i]-array[i-1]>1){
            return i-1
        }
    }

    return "null"
}

console.log(getMissingElement([1,3,4,4,5]))
