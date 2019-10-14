

let Client = function (name){
    this.name = name;
    this.orders = [];

    this.addOrder = function(order){
        this.orders.push(order);
    }
    this.prinnnt = function(){
        this.orders.forEach(position => position.printOrderSummary())
    }

    this.prinnnt()
    console.log(this.prinnnt())
}