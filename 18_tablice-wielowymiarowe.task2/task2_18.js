//let createarray = () =>{}
function createarray () {
    let array = [];
    let a = 1;
    for (let i = 0; i < 3; i++) {
       array[i] = [];
        for (let j = 0; j < 4; j++) {

            array[i].push(a)
            //array2[j] = a;
            a++;
        }
        //array[i] = array2;
        //array.push(array2);
    }
    return array;
}

let a = createarray()


console.log(a);