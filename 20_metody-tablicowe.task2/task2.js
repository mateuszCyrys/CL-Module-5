let array = [1,2,32,4];
let result = array.reduce((prev, curr)=>{
    return prev += curr;
});
console.log(result);