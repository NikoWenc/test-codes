function Book (tittle, author, pages) {
    if (!new.target){
        throw Error("You must use the 'new' operator to call the constructor")
        
    }
    this.tittle = tittle;
    this.author = author;
    this.pages = pages;
    this.read = 'not read yet';
    this.info = () => `${this.tittle} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295);
