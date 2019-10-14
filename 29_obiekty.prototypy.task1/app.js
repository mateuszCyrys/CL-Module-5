let Mateusz = new Employee("Mateusz","Cyrys", 5000);
let Pawel = new Employee("Pawel","Gawel", 1000);
let Lukasz = new Employee("Lukasz","Gawel", 2000);

let Ania = new Client("żona","moja żona")
let Kasia = new Client("ktos","ktos tam")

let programowanie = new Task("programowanie",Ania,Mateusz);
let programowanie1 = new Task("programowanie1",Ania,Pawel);
let programowanie2 = new Task("programowanie2",Kasia,Lukasz);

programowanie.addOperation("nakurwiaj obiekty",Mateusz,1);
programowanie.addOperation("bo inaczej",Pawel,2);
programowanie.addOperation("nie bedzie Cie stac na dom",Lukasz,3);

programowanie1.addOperation("ciekawe",Mateusz,1);
programowanie1.addOperation("co",Lukasz,2);
programowanie2.addOperation("wyjdzie",Mateusz,3);


Ania.printTasks()
Kasia.printTasks()

//Mateusz.printCash()
//console.log(programowanie.addOperation("nakurwiaj obiekty",Mateusz,120))

//programowanie.getTotalTime()

