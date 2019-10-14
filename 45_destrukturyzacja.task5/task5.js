let getAnimal = function() {
        this.name = "Mruczek",
        this.age = 10;
        this.getVoice = () => "miau miau";

};

//let a = new getAnimal()
let{name:catName,getVoice:catVoice} = new getAnimal()

console.log(catName);
console.log(catVoice());