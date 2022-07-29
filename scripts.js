// Selecting inputs
const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#author');
const numberOfPagesInput = document.querySelector('#noPages');
const datePublishedInput = document.querySelector('#yearPublished');
const readInput = document.querySelector('#read');

const bookShelf = document.querySelector('.books-shelf');




//Book constructor
// function Book(title, author, numberOfPages, datePublished, read) {
//     this.title = title;
//     this.author = author;
//     this.numberOfPages = numberOfPages;
//     this.datePublished = datePublished;
//     this.read = Boolean(read);
// }

class Book {
    constructor(title, author, numberOfPages, datePublished, read){
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.datePublished = datePublished;
        this.read = Boolean(read);
    }
};


const TwelveRules = new Book("12 Rules for Life", "Jordan B. Peterson", "309", "2018", true);
const Dostoevsky = new Book("Notes from Underground", "Fyodor Dostoevsky", "136", "1864", false);

let myBooks = [TwelveRules, Dostoevsky];

//Pass values from input to Book constructor, push book in array 
function addBookToLibrary() {
    const inputBook = new Book(titleInput.value, authorInput.value, numberOfPagesInput.value, datePublishedInput.value, readInput.checked);
    myBooks.push(inputBook);
}

const form = document.querySelector('#addBookForm');
form.addEventListener('submit', function(e){
    e.preventDefault();
    addBookToLibrary();
    resetForm();
    loopThroughLibraryAndWrite();
});

function loopThroughLibraryAndWrite(){
    bookShelf.replaceChildren();
    myBooks.forEach(function(book){
        createBooksCard(book.title, book.author, book.numberOfPages, book.datePublished, book.read, myBooks.indexOf(book));
    });
}

function createBooksCard(title, author, pages, datePublished, read, bookIndex) {
    const divCard = document.createElement('div');
    const titleParagraph = document.createElement('p');
    const authorParagraph = document.createElement('p');
    const pagesParagraph = document.createElement('p');
    const readButton = document.createElement('button');
    const removeButton = document.createElement('button');
    const divButtons = document.createElement('div');

    divCard.classList.add('book-card');
    titleParagraph.classList.add('title'); 
    authorParagraph.classList.add('author');
    pagesParagraph.classList.add('pages');
    divButtons.classList.add('book-card-buttons');
    removeButton.classList.add('remove-btn');

    readButton.classList.add('read');
    if(read == false){
        readButton.classList.add('not');
    }

    readButton.setAttribute('data-index', bookIndex);
    readButton.addEventListener('click', function(e){
        if(read == false){
            myBooks[readButton.dataset.index].read = true;
        } else{
            myBooks[readButton.dataset.index].read = false;
        }
        loopThroughLibraryAndWrite();
    });

    removeButton.setAttribute('data-index', bookIndex);
    removeButton.addEventListener('click', function(){
        myBooks.splice(removeButton.dataset.index, 1);
        loopThroughLibraryAndWrite();
    });

    titleParagraph.textContent = title;
    authorParagraph.textContent = `by ${author}, ${datePublished}`;
    pagesParagraph.textContent = `${pages} pages`;
    removeButton.textContent = "Remove"
    readButton.textContent = "Read"
    if(read == false){
        readButton.innerHTML = "Not read yet"
    }

    divButtons.append(readButton, removeButton);
    divCard.append(titleParagraph, authorParagraph, pagesParagraph, divButtons);

    bookShelf.appendChild(divCard);
}

function resetForm() {
    titleInput.value = "";
    authorInput.value = "";
    numberOfPagesInput.value = "";
    datePublishedInput.value = "";
    readInput.checked = false;
}

window.onload = loopThroughLibraryAndWrite();
window.onload = resetForm();