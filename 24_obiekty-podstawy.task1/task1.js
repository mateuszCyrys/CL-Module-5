function createUser(name, surname, password, role, sallary) {
    return{
    name,
    surname,
    password,
    role,
    sallary,
    }

}



let user = createUser("Grzegorz","Brzęczyszczykiewicz","Szczekociny","admin", 5000);
console.log(user);
