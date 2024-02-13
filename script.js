'use strict'
/*1. Створити сутність "Людина".
Властивості:
- імʼя;
- вік.
Методи:
- конструктор, який приймає два параметри: імʼя та вік;
- метод, який виводить у консоль інформацію про людину.*/
class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    showHuman(){
        console.log(`Ім'я: ${this.name}. Вік: ${this.age} років.`)
    }
}
/*2. Створити сутність "Автомобіль".

Властивості:
- марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
- власник.
Методи:
- конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
- присвоїти власника - метод повинен приймати екземпляр класу Людина, 
та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
- метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника*/

class Auto{
    constructor(brand, model, year, number){
        this.autoBrand = brand;
        this.autoModel = model;
        this.autoYear = year;
        this.autoNumber = number;
        this.owner = null;
    }

    chekOwnerAge(owner){
        if(owner.age >= 18){
            this.owner = owner;
        }else{
            console.log(`Автомібіль можна мати лише з досягенням повноліття.`)
        }
    }

    showAutoInfo(){
        console.log(`Автомобіль: ${this.autoBrand}. Модель автомобіля: ${this.autoModel}. Рік виготовлення авто: ${this.autoYear}. Номер авто: ${this.autoNumber}`)
        if(this.owner){
            console.log(`Інформація власника:`)
            this.owner.showHuman();
        }else{
            console.log(`Власника автоміля ще непризначено.`)
        }
    }
}
/*В якості демонстраціїї створити:
- декілька екземплярів класу Людина;
- декілька екземплярів класу Автомобіль;
- присвоїти власників автомобілям.*/

const person1 = new Human('Джош', 17);
const person2 = new Human('Метью', 25);

const auto1 = new Auto('Skoda', 'Fabia', 2020, 'RE7842');
const auto2 = new Auto('Honda', 'Civic', 2018, 'HO2596');

auto1.chekOwnerAge(person1);
auto1.showAutoInfo();

auto2.chekOwnerAge(person2);
auto2.showAutoInfo();