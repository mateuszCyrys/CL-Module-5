let  lettersCount = array => array.map(el => el.length);

let cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];
let letters = lettersCount(cities);
console.log(letters);