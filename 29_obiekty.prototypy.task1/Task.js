let Task = function(subject,client,employee) {
    this.subject = subject;
    this.employee = employee;
    this.status = "not started";
    this.operation = [];
    this.client = client;
   // this.counter = 0;
   this.client.addTask(this);
}
Task.prototype.addOperation = function(description, employee, minutes) {
    if(this.status != "finished") {
        let operation = new TaskOperation(this, description, employee, minutes)
        this.operation.push(operation);
        if (this.status ==="not started") {
            this.status = "in progress"
        }
    }
    else {
        return "to juz koniec debilu";
    }
}
Task.prototype.getTotalTime = function() {
    let counter = 0;
    for (let i=0; i<this.operation.length; i++){
        counter += this.operation[i].minutes;
    }
    return counter

};

Task.prototype.calcCost = function() {
    let time = this.getTotalTime();
    let Cost = time * this.employee.sallary
    return Cost
}

Task.prototype.toString = function() {
    console.log('Client: ' + this.client.fullName);
   // console.log(this.operation.em);
    console.log('Task: ' + this.subject);
    console.log('Time: ' + this.getTotalTime())
    console.log('Koszt: ' + this.calcCost())
}