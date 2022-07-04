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
    createBooksCard(titleInput.value, authorInput.value, numberOfPagesInput.value, datePublishedInput.value, readInput.checked);
}

const bookShelf = document.querySelector('.books-shelf');

const form = document.querySelector('#addBookForm');
form.addEventListener('submit', function(e){
    e.preventDefault();
    addBookToLibrary();
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