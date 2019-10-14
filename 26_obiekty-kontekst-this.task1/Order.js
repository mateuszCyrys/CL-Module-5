


let Order = function (client, number){
    //atttributes
    this.client = client;
    this.number = number;
    this.positions = [];
    this.totalValue = 0;

    //initialize
    client.addOrder(this);

    //methods
    this.addPosition = function(product, quantity){
        let orderItem = new OrderItem(this, product, quantity);
        this.positions.push(orderItem);
        this.countTotalValue();
    };
    this.countTotalValue = function(){
        this.positions.forEach(position => this.totalValue += position.calcValue())
    }
    this.printer = function() {
        this.positions.forEach(position => position.print())
    }
    this.printOrderSummary = function() {
        console.log("Zamówienie numer: " + this.number);
        console.log("Klient: " + this.client.name);
        console.log("Pozycje:");
        this.printer()
        console.log("Wartość całkowita" + this.totalValue)
    }

    this.printOrderSummary()
};