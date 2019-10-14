String.prototype.upperLower = function(){
    let newText = "";
    let counter = 1;
    for(let i=0; i< this.length; i++){
        let char = this[i];
        if(char != " "){
            if(counter%2==0){
                char = char.toLowerCase();
            }else{
                char = char.toUpperCase();
            }
            counter++;
        }
        newText+=char;
    }
    return newText;
}

let text = "JavaScript rules";
let modified = text.upperLower();
console.log(modified);


