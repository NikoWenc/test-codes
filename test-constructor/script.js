
const myLibrary = [];

function Book (tittle, author, pages) {
    if (!new.target){
        // log this error if 'new' operator is not called
        throw Error("You must use the 'new' operator to call the constructor")
        
    }
    this.tittle = tittle;
    this.author = author;
    this.pages = pages;
    this.read = 'not read yet';
    this.info = () => `${this.tittle} by ${this.author}, ${this.pages} pages, ${this.read}`;
    this.id = crypto.randomUUID();
}

function addToLibrary (book) {
    myLibrary.push(book);
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295);







// function Player(name, marker) {
//   if (!new.target) {
//     throw Error("You must use the 'new' operator to call the constructor");
//   }
//   this.name = name;
//   this.marker = marker;
//   this.sayName = function() {
//     console.log(this.name)
//   };
// }

// const player1 = new Player('steve', 'X');
// const player2 = new Player('also steve', 'O');

// function Person(name) {
//     if (!new.target){
//         throw Error (`Use "New"`);
//     }
//   this.name = name;
// }

// Person.prototype.sayName = function() {
//   console.log(`Hello, I'm ${this.name}!`);
// };

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
// }

// Player.prototype.getMarker = function() {
//   console.log(`My marker is '${this.marker}'`);
// };

// Object.getPrototypeOf(Player.prototype);


// function sayThis (param) {
//     return console.log(param);
// }