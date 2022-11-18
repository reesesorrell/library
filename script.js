let userLibrary = []

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

function addBookToLibrary(bookInfo) {
    const book = new Book(bookInfo[0], bookInfo[1], bookInfo[2], bookInfo[3]);
    userLibrary.push(book);
}

function deleteChildren(selector) {
    var e = document.querySelector(selector);
    
    var child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}

function displayBooks(bookList) {
    deleteChildren('.bookHolder');
    for (let i = 0; i<bookList.length;  i++) {
        var bookCard = document.querySelector('.bookHolder');

        var bookDisplay = createDiv('', bookCard, 'book', 'book' + i);

        createDiv(bookList[i].title, bookDisplay, 'bookTitle');
        createDiv(bookList[i].author, bookDisplay, 'bookAuthor');
        createDiv(bookList[i].pages + ' pages', bookDisplay, 'bookPages');
        if (bookList[i].haveRead) {
            var haveReadButton = document.createElement('button');
            haveReadButton.innerHTML = 'Have Read';
            haveReadButton.classList.add('haveReadButton');
            haveReadButton.onclick = swapHaveRead;
            bookDisplay.appendChild(haveReadButton);
        }
        else {
            var haveReadButton = document.createElement('button');
            haveReadButton.innerHTML = 'Have Not Read';
            haveReadButton.classList.add('haveReadButton');
            haveReadButton.onclick = swapHaveRead;
            bookDisplay.appendChild(haveReadButton);
        }
        

        var deleteBookButton = document.createElement('button');
        deleteBookButton.innerHTML = 'Delete book';
        deleteBookButton.classList.add('deleteBookButton');
        deleteBookButton.onclick = deleteBook;
        bookDisplay.appendChild(deleteBookButton);
    }
}

function swapHaveRead() {
    let bookId = this.parentNode.id;
    let bookNumber = bookId.charAt(bookId.length - 1);
    userLibrary[bookNumber].haveRead = !userLibrary[bookNumber].haveRead;
    displayBooks(userLibrary);
}

function createDiv(content, context, divClass, divId) {
    var newDiv = document.createElement('div');
    if (content) {
        newDiv.innerHTML = content;
    }
    if (divClass) {
        newDiv.classList.add(divClass);
    }
    if (divId) {
        newDiv.setAttribute('id', divId)
    }
    context.appendChild(newDiv);
    return newDiv
}

function createInput(context, type) {
    var newInput = document.createElement('input');
    if (type) {
        newInput.type = type;
    }
    context.appendChild(newInput);
    return newInput;
}

function makeBookForm() {
    var bookForm = document.createElement('form');
    bookForm.classList.add('bookForm');
    document.body.appendChild(bookForm);

    createDiv("Title: ", bookForm);
    createInput(bookForm);

    createDiv("Author: ", bookForm);
    createInput(bookForm);

    createDiv("Page Count: ", bookForm);
    createInput(bookForm, 'number');

    createDiv("Have you read it: ", bookForm);
    createInput(bookForm, 'checkbox');

    createInput(bookForm, 'submit');

    bookForm.addEventListener('submit', event => {
        const bookForm = event.target;
        let bookInfo = [];
        Array.from(bookForm.elements).forEach(i => {
            if (i.type == 'checkbox') {
                bookInfo.push(i.checked);
            }
            else {
                if (i.value) {
                    bookInfo.push(i.value)
                }
                else {
                    bookInfo.push('N/A')
                }
            }
        })
        addBookToLibrary(bookInfo);
        displayBooks(userLibrary);
        event.preventDefault();
        bookForm.remove();
    });
}

function deleteBook() {
    let parentId = this.parentNode.id;
    let bookNumber = parentId.charAt(parentId.length - 1);
    userLibrary.splice(bookNumber, 1);
    displayBooks(userLibrary);
}