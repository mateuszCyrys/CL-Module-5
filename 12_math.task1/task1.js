
let calculator = (num1, num2, operation) =>{
    if (operation == "^"){
        return Math.pow(num1,num2);
    } else if(operation == "sq"){
        a = 1 /num2;
        return Math.pow(num1,a);
    } else{
        return "zly operator"
    }

}

console.log(calculator(9,2,"sq"))

