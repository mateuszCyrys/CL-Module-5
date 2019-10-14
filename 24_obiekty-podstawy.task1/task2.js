
//zadanie1
function createUser(name, surname, password, role, sallary) {
    return{
        name,
        surname,
        password,
        role,
        sallary,
    }

}

// zadanie 2
let users = [
    createUser("Grzegorz","Brzęczyszczykiewicz","Szczekociny","admin", 5000),
    createUser("Grzegorz1","Brzęczyszczykiewicz1","Szczekociny1","admin", 5000),
    createUser("Grzegorz2","Brzęczyszczykiewicz2","Szczekociny2","admin", 5000),
    createUser("Grzegorz3","Brzęczyszczykiewicz3","Szczekociny3","client", 5000),
    createUser("Grzegorz4","Brzęczyszczykiewicz4","Szczekociny4","client", 5000),
    createUser("Grzegorz5","Brzęczyszczykiewicz5","Szczekociny5","client", 5000)
]

function getUsersWithRole(role, usersArray){
    return usersArray.filter(vhooj => vhooj.role===role);
}

console.log(getUsersWithRole("admin",users))

//zadanie 3

let totalSallary = (role, usersArray) => {
     pofiltorwane = getUsersWithRole(role, usersArray);

    return pofiltorwane.reduce((prev,curr) =>({
        sallary: prev.sallary + curr.sallary
    }))
}

//console.log(totalSallary("admin",users))

//zadanie 4

let raiseSallary = (role, percent, usersArray) =>{
   return usersArray.map(element =>{
       if(element.role === role) {
           let raise = element.sallary * percent;
           return element.sallary + raise;
       }
       return element.sallary;
   })
}

//console.log(raiseSallary('admin',0.1,users))
