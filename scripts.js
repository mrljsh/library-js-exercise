let myBooks = [];

function Book(title, author, numberOfPages, datePublished, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.datePublished = datePublished;
    this.read = Boolean(read);
}

function addBookToLibrary() {
    
    const titleInput = document.querySelector('#titleInput');
    console.log(titleInput.value);
    const authorInput = document.querySelector('#author');
    console.log(authorInput.value);
    const numberOfPagesInput = document.querySelector('#noPages');
    console.log(numberOfPagesInput.value);
    const datePublishedInput = document.querySelector('#yearPublished');
    console.log(datePublishedInput.value);
    const readInput = document.querySelector('#read');
    console.log(readInput.checked);

    const inputBook = new Book(titleInput.value, authorInput.value, numberOfPagesInput.value, datePublishedInput.value, readInput.checked);
    console.log(inputBook);
    myBooks.push(inputBook);
    console.log(myBooks);
}

const form = document.querySelector('#addBookForm');
form.addEventListener('submit', function(e){
    e.preventDefault();
    addBookToLibrary();
});

function createBooksCard() {
    const bookShelf = document.querySelector('.books-shelf');
    const divCard = document.createElement('div');
}