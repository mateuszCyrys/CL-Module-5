Array.prototype.printValues = function(){
    this.forEach(el => {
        console.log(el);
    }
    )
}

let tab = [0,2,6,5];
tab.printValues();