let PhoneNumber = function(owner,phoneNumber) {
    this.owner = owner;
    this.phoneNumber = phoneNumber;
};

PhoneNumber.prototype.printDetails = function(){
    console.log(this.owner);
    console.log(this.phoneNumber);
};



