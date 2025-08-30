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


// 4. BankAccount Class with Deposit and Withdrawal
// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
    constructor(accountNumber, balance){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(depositAmount){
        this.balance = this.balance + depositAmount;
    }

    widthdraw(withdrawAmount){
        this.balance = this.balance - withdrawAmount;
    }
}

const myBank = new BankAccount('0o103', 100000000);


// 5. Shape, Circle, and Triangle Classes with Area Calculation
// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class Shape {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    get area(){
        return this.height * this.width;
    }
}

class Circle extends Shape{
    constructor(width, height){
        super(width, height);
    }

}

class Triangle extends Shape{
    constructor(width, height){
        super(width, height);
    }
}

const circle = new Circle(10, 10);
const triangle = new Triangle(20, 20);


// 6. Employee and Manager Classes with Salary Calculation
// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary. 

class Employee {
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }

    annualSalary(){
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department){
        super(name, salary);
        this.department = department;
    }

    annualSalary(){
        return this.salary + (this.salary * 12);
    }
}

const manager1 = new Manager('niko', 200000, 'Web Developer');
const manager2 = new Manager('okin', 190000, 'Web Developer');


// 7. Book and Ebook Classes with Price
// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

class Book {
    constructor(tittle, author, publicationYear){
        this.tittle = tittle;
        this.author = author;
        this.publicationYear = publicationYear;
    }

    bookDetails(){
        return `The Book '${this.tittle}' by ${this.author} was published by the year ${this.publicationYear}`;
    }
}

class Ebook extends Book {
    constructor(tittle, author, publicationYear, bookPrice){
        super(tittle, author, publicationYear);
        this.bookPrice = bookPrice;
    }

    bookDetails(){
        return `The Book '${this.tittle}' by ${this.author} was published by the year ${this.publicationYear} and the price was $${this.bookPrice}`;
    }
}

const sampleBook = new Ebook('How to be super', 'niko', 2035, 500);


// 8. Animal and Dog Classes with Sound
// Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound.

class Animal {
    constructor(species, sound){
        this.species = species;
        this.sound = sound;
    }

    get makeSound(){
        return this.sound;
    }

    set makeSound(newSound){
        this.sound = newSound;
    }
}

class Dog extends Animal {
    constructor(species, sound, color){
        super(species, sound);
        this.color = color;
    }

    get makeSound(){
        return super.makeSound + ' ' + this.color;
    }

    set makeSound(newSound){
        super.makeSound = newSound;
    }
}

const spike = new Dog('aspin', 'grrrrr', 'brown');
spike.makeSound;
spike.makeSound = 'dame un grrrrrr';
spike.makeSound;


// 9. Bank Class with Branch Management
// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

class Bank {
    constructor(bankName){
        this.bankName = bankName;
        this.branches = [];
    }

    addBranch(branchName){
        return this.branches.push(branchName);
    }

    removeBranch(branchName){
        return this.branches.map((branch, index) => {

            if (branchName === branch) {
                this.branches.splice(index, 1);
            }

        })
    }

    displayAllBranches(){
        return this.branches.map(branch => console.log(branch));
    }
}

const sampleBank = new Bank('BDO');
sampleBank.addBranch('Manila');
sampleBank.addBranch('Batangas');
sampleBank.addBranch('Baguio');

// 10. Product and PersonalCareProduct Classes with Warranty
// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.

class Product {
    constructor(productID, productName, productPrice){
        this.productID = productID;
        this,productName = productName;
        this.productPrice = productPrice;
    }

    totalPrice(quantity){
        return this.productPrice * quantity;
    }
}

class PersonalCareProduct extends Product {
    constructor(productID, productName, productPrice, warrantyPeriod){
        super(productID, productName, productPrice);
        this.warrantyPeriod = warrantyPeriod;
    }

    totalPrice(quantity){
        return super.totalPrice(quantity) + ' ' + this.warrantyPeriod;
    }
}

const soap = new PersonalCareProduct('fakeId', 'safeG', 20, '7/01/2038');
soap.totalPrice(10);

// 11. BankAccount Class with Transfers Between Accounts
// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

class BankAccount {
    constructor(accountNumber, accountName, accountBalance){
        this.accountNumber = accountNumber;
        this.accountName = accountName;
        this.accountBalance = accountBalance;

        // push the instance of BankAccount to the accounts array
        this.constructor.bankAccounts.push(this);
    }

    static bankAccounts = [];

    static findAccount(accountNumber){
        return this.bankAccounts.find(acc => accountNumber === acc.accountNumber);
    }
    

    viewAllAccounts(){
        console.table(this.constructor.bankAccounts);
    }


    deposit(depositAmount){
        this.accountBalance += depositAmount;
    }


    withdraw(withdrawAmount){

        if (this.accountBalance < withdrawAmount) return;

        this.accountBalance -= withdrawAmount;
    }
    

    transfer(amount, transfereeAccountNumber){

        const account = this.constructor.findAccount(transfereeAccountNumber);

        if (!account) {
            console.log(`account is not found`);
            return;
        }

        if (this.accountBalance < amount) {
            console.log(`account balance is not enough`);
            return;
        }

        account.deposit(amount);
        this.withdraw(amount);
        this.viewAllAccounts();
    }
}

const myAccount1 = new BankAccount('0000', 'Niko', 20);
const myAccount2 = new BankAccount('1111', 'okin', 30);




// 12. University Class with Department Management
// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments. 