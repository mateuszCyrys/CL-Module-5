let Order = function(client, number){
    this.client = client;
    this.number = number;
    this.positions = [];
    client.addOrder(this);
    this.addPosition = function(product, quantity){
        let orderItem = new OrderItem(this, product,quantity);
        this.positions.push(orderItem);
        orderItem.calcValue();
    }
}