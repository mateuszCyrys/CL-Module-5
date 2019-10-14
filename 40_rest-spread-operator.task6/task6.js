/*
let sayHello = function (...name) {
    name.forEach(function(element){
        console.log("Hello: " + element)
    })
};

 */

let sayHello = (...name) => name.forEach(element => console.log("Hello: " + element))

sayHello("Ania", "Kasia", "Steve", "Bogumił");