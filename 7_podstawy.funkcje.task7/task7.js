function factors(number){



    for(let i = 0; i<=number; i++) {
        if (i%2 ===0) {
            console.log(i + " - parzysta")
        } else{
            console.log(i + " - nieparzysta")
        }
    }


}

console.log(factors(10));

