function factors(number){

    if(number <=0 ){
        return "number should be bigger than 0"
    }
    let table = [];
    let intiger = 0;

    let i = number-1;

    for(i; i>0; i--) {
        if (number%i ===0) {
            table[intiger] = i;
            intiger++;
        }
    }
return table;

}

console.log(factors(10000000));

