Array.prototype.customReduce = function(callback,init){
    if(typeof callback != 'function') {
        throw Error('callback param is not a function');
    }
    if (this.length===0){
        throw Error('array is empty');
    }
    let prev,start;

    if (typeof init!== "undefined") {
        prev = init;
        start = 0;
    }
    else{
        prev = this[0];
        start = 1;
    }
    for (let i=start; i < this.length; i++){
        let result = callback(prev, this[i],i,this)
        prev = result;
    }
    console.log(prev)
    return prev;

}

let tab = [2,6,1,3,4,5,6];
tab.customReduce(function (prev,current) {
    return prev + current;
},5)