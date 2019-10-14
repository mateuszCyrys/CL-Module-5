function contains(text,arr){
    arr.filter(function(element, index, arr){
        return (element === text);
    });
}
console.log(contains("aaa",["aaa","sbs"]))