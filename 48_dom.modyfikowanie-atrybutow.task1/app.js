var homeElement = document.getElementById("home");
var childElements = document.querySelector(".oferts").querySelectorAll('div, h2, p');
var banner = document.querySelector(".ban");
var blocks = document.querySelectorAll(".block");
var links = document.querySelector(".links").querySelectorAll('li');


//Part 1
function getDatasInfo(elements) {
   let table = [];

    for (let i = 0; i<elements.length; i++){
        table[i] = elements[i].dataset.color;

    }
    return table
}

function getDatasInfo2(elements) {
    let table1 = [];
    array = Array.from(elements);

    array.forEach(el => {table1.push(el.dataset.color)})
    return table1
}

function getDatasInfo3(elements){
    let arr = [];
    Array.from(elements).forEach( elem => {
        let dataset = elem.dataset;
        for(let dataKey in dataset) {
            arr.push(dataset[dataKey]);
        }
    });
    return arr;
}


getDatasInfo(links);

console.log("Zadanie 1 v1 " + getDatasInfo(links))
console.log(getDatasInfo2(links))
console.log(getDatasInfo3(links))

//Part 2
/*console.log(homeElement);
console.log(childElements);
console.log(banner);
console.log(blocks);

 */
console.log("Zadanie 2")
let child = Array.from(childElements);
child.forEach(el => {console.log(el.tagName, el.className)})


let block = Array.from(blocks);
block.forEach(el => {console.log(el.tagName, el.className)})

console.log("Zadanie 3a")
block.forEach(el => {console.log(el.innerText)})
console.log("Zadanie 3b")
block.forEach(el => {el.innerText = "Nowa wartość diva o klasie blocks"})
block.forEach(el => {console.log(el.innerText)})

//Zadanie 4
console.log("Zadanie 4")
var footer = document.querySelector(".superFooter");
console.log(footer.id);

//Zadanie 5
console.log("Zadanie 5")

function getTags(elements){
return Array.from(elements).map(el => el.tagName)

}

console.log(getTags(childElements))

console.log("Zadanie 6")

function getClassInfo(elements){
    return Array.from(elements.classList).map(el => el)

}

console.log(getClassInfo(banner))