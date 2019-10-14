let OrderItem = function(order, product, quantity){
    this.order = order;
    this.product = product;
    this.quantity = quantity;
    this.cena = []
    this.calcValue = function(){
        if (!(this.order instanceof Order) || !(this.product instanceof Product)){
            return null;
        }
        let a = this.product.price*this.quantity;
        this.cena.push(a);
        return a
    }

}