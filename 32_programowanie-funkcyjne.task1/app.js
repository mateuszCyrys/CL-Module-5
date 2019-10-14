let main = function(p1,p2,callback){
    if(typeof callback != 'function') {
        throw Error('callback param is not a function');
    }
    let randomNumber = Math.round((Math.random() * (p2-p1)) + p1 );
    callback(randomNumber)
}

let print = function(number){
    console.log(number);
};

main(1,5,print)