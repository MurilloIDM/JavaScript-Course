var userPerson = {
    name: "Murillo",
    lastName: "Medeiros",
    age: 17,
    email: "murilloidm05@gmail.com",
    weigth: 64.5,
    height: 1.83,
    imcCalc: function () {
        return this.weigth / (this.height ** 2);
    } 
};

userPerson.favoriteColor = "blue";
userPerson["favoriteGame"] = "CS - GO";

console.log(userPerson);