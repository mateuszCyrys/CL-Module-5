let Client = function(shortcut, fullName) {
    this.shortcut = shortcut;
    this.fullName = fullName;
    this.tasks = [];
};

Client.prototype.addTask = function(task) {
    this.tasks.push(task);
};

Client.prototype.printTasks = function() {
    this.tasks.toString()
};

