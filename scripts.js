// Selecting inputs
const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#author');
const numberOfPagesInput = document.querySelector('#noPages');
const datePublishedInput = document.querySelector('#yearPublished');
const readInput = document.querySelector('#read');

let myBooks = [];


//Book constructor
function Book(title, author, numberOfPages, datePublished, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.datePublished = datePublished;
    this.read = Boolean(read);
}

function addBookToLibrary() {
    const inputBook = new Book(titleInput.value, authorInput.value, numberOfPagesInput.value, datePublishedInput.value, readInput.checked);
    myBooks.push(inputBook);
    createBooksCard(titleInput.value, authorInput.value, numberOfPagesInput.value, datePublishedInput.value, readInput.checked);
}

const bookShelf = document.querySelector('.books-shelf');

const form = document.querySelector('#addBookForm');
form.addEventListener('submit', function(e){
    e.preventDefault();
    addBookToLibrary();
    resetForm();
});

function createBooksCard(title, author, pages, datePublished, read) {
    const divCard = document.createElement('div');
    const titleParagraph = document.createElement('p');
    const authorParagraph = document.createElement('p');
    const pagesParagraph = document.createElement('p');
    const readParagraph = document.createElement('p');

    divCard.classList.add('book-card');
    titleParagraph.classList.add('title'); 
    authorParagraph.classList.add('author');
    pagesParagraph.classList.add('pages');
    readParagraph.classList.add('read');
    if(read == false){
        readParagraph.classList.add('not');
    }

    titleParagraph.textContent = title;
    authorParagraph.textContent = `by ${author}, ${datePublished}`;
    pagesParagraph.textContent = `${pages} pages`;
    readParagraph.textContent = "Read"
    if(read == false){
        readParagraph.innerHTML = "Not read yet"
    }

    divCard.append(titleParagraph, authorParagraph, pagesParagraph, readParagraph);

    bookShelf.appendChild(divCard);
}

function resetForm() {
    titleInput.value = "";
    authorInput.value = "";
    numberOfPagesInput.value = "";
    datePublishedInput.value = "";
    readInput.checked = false;
}