let WladcaPierscieni = new Product("władca",50);
let Kot = new Product("kotek",70);
let Pies = new Product("Piesek",150);

let Mateusz = new Client("Mateusz");
let order1 = new Order(Mateusz,1);

order1.addPosition(WladcaPierscieni,3);
order1.addPosition(Kot,4);
order1.addPosition(Pies,7);


console.log(Mateusz);
console.log(order1);



