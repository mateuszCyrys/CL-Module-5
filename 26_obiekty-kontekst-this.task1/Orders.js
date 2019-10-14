

let Orders = function (order){

    this.orders = order;

    this.addOrder = function(order){
        this.orders.push(order);
    }

}