// 1. Person Class with Details
// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.
class Person {
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }

    myDetails(){
        return `My name is ${this.name} I'm ${this.age} years old and I live in ${this.country}`;
    }
}

const person1 = new Person('niko', 25, 'Philippines');
const person2 = new Person('niko', 30, 'All over the WORLD!');

// 2. Rectangle Class with Area and Perimeter
// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    get area(){
        return this.height * this.width;
    }

    get perimeter(){
        return 2 * (this.height + this.width);
    }
}

const rectangle = new Rectangle(20, 40);

// 3. Vehicle and Car Classes with Inheritance
// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayDetails(){
        return `I have a ${this.year} ${this.make} ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, numberOfDoors){
        super(make, model, year);
        this.numberOfDoors = numberOfDoors;
    }

    displayDetails(){
        return `I have a ${this.numberOfDoors} doors ${this.year} ${this.make} ${this.model}`;
    }
}

const myCar = new Car('Porche', '911', '2030', 2);
