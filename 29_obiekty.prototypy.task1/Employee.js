let Employee = function(name, surname, sallary) {
    this.name = name;
    this.surname = surname;
    this.sallary = sallary;
    //this.printCash()
};

Employee.prototype.printCash = function() {
    console.log(this.sallary);
};