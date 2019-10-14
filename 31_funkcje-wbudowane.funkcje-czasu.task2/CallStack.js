
let counter = 1;

function counting(){
    console.log(counter);
    counter++;
    if(counter===7){
        clearInterval(interval);
    }
}

let interval = setInterval( counting, 1000);

