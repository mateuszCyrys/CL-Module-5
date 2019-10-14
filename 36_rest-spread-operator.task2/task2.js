function getAverage(...numbers) {
    return numbers.reduce((p,c) => p+c)/numbers.length
}

let avg = getAverage(2,4,5,6,7,4,3,2,4,5,6);
console.log(avg);