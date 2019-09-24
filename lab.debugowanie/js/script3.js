function getRandomNumber(min, max){
    return Math.round((Math.random() * (max-min)) + min );
}


let testNumber;
for(let i=0; i<20; i++){
    testNumber = getRandomNumber(0,100);
}

console.log(testNumber);