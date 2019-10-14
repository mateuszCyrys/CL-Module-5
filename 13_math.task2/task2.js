let randomNumber = (min,max) =>{

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomNumber(20,1060))

