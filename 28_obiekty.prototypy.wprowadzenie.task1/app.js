let Mateusz = new PhoneNumber("Mateusz Cyrys","+48355363");
let Mateusz1 = new PhoneNumber("Mateusz Cyrys1","+483553631");
let Mateusz2 = new PhoneNumber("Mateusz Cyrys2","+483553632");
let Mateusz3 = new PhoneNumber("Mateusz Cyrys3","+483553633");
let Mateusz4 = new PhoneNumber("Mateusz Cyrys4","+483553634");
let Mateusz5 = new PhoneNumber("Mateusz Cyrys5","+483553635");



let komorka = new CellPhone("S10Galaxy","Samsung");
//console.log(komorka)

komorka.addPhoneToPhoneBook("Mateusz Cyrys","+48355363");
komorka.addPhoneToPhoneBook("Mateusz Cyrys1","+483553631");
komorka.addPhoneToPhoneBook("Mateusz Cyrys2","+483553632");
komorka.addPhoneToPhoneBook("Mateusz Cyrys3","+483553633");
komorka.addPhoneToPhoneBook("Mateusz Cyrys4","+483553634");
komorka.addPhoneToPhoneBook("Mateusz Cyrys5","+483553635");

komorka.receiveCall(Mateusz5)

komorka.printPhoneBook()