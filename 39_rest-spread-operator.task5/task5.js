
let people = [
    {
        person: "Kim Yoo Suk",
        profession: "tyczkarz"
    },
    {
        person: "Sue Yoo",
        profession: "prawnik"
    },
    {
        person: "Dr. Alden Cockburn",
        profession: "urolog"
    },
    {
        person: "Rusty Kuntz",
        profession: "trener"
    }
];


let setFunnyName = function(...par) {
    let newTable = [people,...par]
    return newTable;
}


let a = setFunnyName(["Ala", "Puszek"],["Jan", "Karol"]);

console.log(a)