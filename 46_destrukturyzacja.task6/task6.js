let wally = {
    name: "Wally",
    age: 2,
    proffesion: "Naprawianie innych robotów"
}

let robot = function(robot){
    let{name,age,proffesion} = robot;
    console.log("Cześć mam na imię " + name + ", mam " + age + " lata i moim zajęciem jest " + proffesion)

}

robot(wally)