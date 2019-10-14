function addArrays(array1, array2) {
    let nara = [];
    let long = 0;

    if (array1.length > array2.length)
        {
        long = array1.length;
        }
    else{
        long = array2.length;
        }
    console.log(long);


    for(let i = 0; i <= long-1; i++) {

        if (isNaN(array1[i]))
            {
            array1[i] = 0;
            }

        if (isNaN(array2[i]))
        {
            array2[i] = 0;
        }
        nara[i] = array1[i] + array2[i];

    }
    console.log(nara);
    return nara;
}

let g = [1,2,3,4,9,8];
let f = [1,1,1,1,1];
addArrays(g,f)



