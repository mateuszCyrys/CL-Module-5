let CellPhone = function(model,brand) {
    this.model = model;
    this.brand = brand;
    this.receivedCalls = [];
    this.outgoingCalls = [];
    this.phoneBook = [];
   // console.log(this.phoneBook.phoneNumber)
};

CellPhone.prototype.receiveCall = function(phoneNumber)
{
    this.receivedCalls.push(phoneNumber);
};
CellPhone.prototype.makeCall = function(phoneNumber)
{
    this.outgoingCalls.push(phoneNumber);
};

CellPhone.prototype.addPhoneToPhoneBook = function(owner, phone)
{
    let element = new PhoneNumber(owner,phone)
    this.phoneBook.push(element);
};

CellPhone.prototype.printPhoneBook = function()
{
    //console.log(this.phoneBook)
    for (let i=0; i<this.phoneBook.length; i++){
        this.phoneBook[i].printDetails();
    }

};

