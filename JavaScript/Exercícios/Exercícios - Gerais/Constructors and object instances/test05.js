//Código continuação dos exemplos da documentação da Mozilla
function Person(first, last, age, gender, interests) {
    this.name = {
        first: first,
        last: last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
        console.log('Hi! I\'m ' + this.name.first + '.');
    };
}

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiling']);

console.log(person1.age);
console.log(person1.interests[1]);
person1.bio();
person1.greeting();