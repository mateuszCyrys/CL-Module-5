//Zadanie 1
console.log("Zadanie 1")
var menu = document.getElementById("menu");

function getDataInfo(element) {
    var lista = element.querySelectorAll("li");
    return Array.from(lista).map(el => el.dataset.info)
}

console.log(getDataInfo(menu))

//Zadanie 2
console.log("Zadanie 2")
var main = document.getElementById("main-contener");

function getElementClass(element){
    return Array.from(element.classList).map(el => el)
}

console.log(getElementClass(main));

//Zadanie 3
console.log("Zadanie 3")

var pink = document.getElementsByClassName("pink-color");
console.log(pink[0].innerText);

//Zadanie 4
console.log("Zadanie 4")

var image = document.getElementsByClassName("images");

function getDataInfo(element) {
    return Array.from(element).map(el => el.alt)
}
console.log(getDataInfo(image));

//Zadanie 5
console.log("Zadanie 5")

var link = document.querySelectorAll(".my-link");
console.log(link);

function getElementHref(element) {
    return Array.from(element).map(el => el.href)
}

console.log(getElementHref(link));
let a = getElementHref(link);

if (a[1]==""){
    console.log("1");
}else{console.log("0")}