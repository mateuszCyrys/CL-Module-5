function sumTwo(num1, num2){
    return num1+num2;
}

function sumThree(num1, num2, num3){

   return sumTwo(num1,num2)+num3;
}

console.log(sumThree(1,2,3))