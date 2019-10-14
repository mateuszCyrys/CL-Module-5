
let counter = 18;

function counting(){
    if (counter ===18){
        console.log("Pozostało 3 minuty i 00 sekund");
    }
    else if (12 < counter  ){
        let rest = counter *10 % 60;
        console.log("Pozostało 2 minuty i " + rest + " sekund" );
    }
    else if (counter ===12){
        console.log("Pozostało 2 minuty i 00 sekund");
    }
    else if (6 < counter  ){
        let rest = counter *10 % 60;
        console.log("Pozostało 1 minuta i " + rest + " sekund" );
    }
    else if (counter ===6){
        console.log("Pozostało 1 minuta i 00 sekund");
    }
    else if (0 < counter  ){
        let rest = counter *10 % 60;
        console.log("Pozostało 0 minut i " + rest + " sekund" );
    }
    else if (counter ===0) {
        console.log("Ugotowane - Czas minął !!!");
        clearInterval(interval);
    }
    counter--;
}




let interval = setInterval( counting, 10000);