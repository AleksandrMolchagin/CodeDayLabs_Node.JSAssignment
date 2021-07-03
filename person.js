class Person {
    constructor(name, age){
        this.name = name; 
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
}

//module.exports = Person;

const aleks = new Person("Aleksandr Molchagin", 19)

aleks.greeting()