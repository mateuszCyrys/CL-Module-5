
let OrderItem = function(order, product, quantity){
    this.order = order;
    this.product = product;
    this.quantity = quantity;

    this.calcValue = function(){
        return this.product.price * this.quantity;
    }

    this.print = function()
    {
        console.log("Produkt: " + this.product.name);
        console.log("Cena " + this.product.price);
        console.log("Ilość " + this.quantity);
        console.log("Wartość " + this.calcValue());
        console.log('-----')
    }
    this.print()
}