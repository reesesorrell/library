let userLibrary = []

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

function addBookToLibrary(bookInfo) {
    const book = new Book(bookInfo[0], bookInfo[1], bookInfo[2], bookInfo[3]);
    userLibrary.push(book)
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

        var bookDisplay = document.createElement('div');
        bookDisplay.classList.add('book');
        bookDisplay.setAttribute('id', 'book' + (i + 1));
        bookCard.appendChild(bookDisplay)

        var titleDisplay = document.createElement('div');
        titleDisplay.innerHTML = bookList[i].title;
        bookDisplay.appendChild(titleDisplay);

        var authorDisplay = document.createElement('div');
        authorDisplay.innerHTML = bookList[i].author;
        bookDisplay.appendChild(authorDisplay);

        var pageDisplay = document.createElement('div');
        pageDisplay.innerHTML = bookList[i].pages;
        bookDisplay.appendChild(pageDisplay);

        var haveReadDisplay = document.createElement('div');
        haveReadDisplay.innerHTML = bookList[i].haveRead;
        bookDisplay.appendChild(haveReadDisplay);
    }
}

function makeBookForm() {
    var bookForm = document.createElement('form');
    bookForm.classList.add('bookForm');
    document.body.appendChild(bookForm);

    var titleIdentifier = document.createElement('div');
    titleIdentifier.innerHTML = "Title: ";
    bookForm.appendChild(titleIdentifier);

    var titleInput = document.createElement('input');
    bookForm.appendChild(titleInput);

    var authorIdentifier = document.createElement('div');
    authorIdentifier.innerHTML = "Author: ";
    bookForm.appendChild(authorIdentifier);

    var authorInput = document.createElement('input');
    bookForm.appendChild(authorInput);

    var pagesIdentifier = document.createElement('div');
    pagesIdentifier.innerHTML = "Page Count: ";
    bookForm.appendChild(pagesIdentifier);

    var pagesInput = document.createElement('input');
    pagesInput.type = 'number';
    bookForm.appendChild(pagesInput);

    var haveReadIdentifier = document.createElement('div');
    haveReadIdentifier.innerHTML = "Have you read it: ";
    bookForm.appendChild(haveReadIdentifier);

    var haveReadInput = document.createElement('input');
    haveReadInput.type = 'checkbox';
    bookForm.appendChild(haveReadInput);

    const submit = document.createElement('input')
    submit.type = 'submit';
    bookForm.appendChild(submit);

    bookForm.addEventListener('submit', event => {
        const bookForm = event.target;
        let bookInfo = [];
        Array.from(bookForm.elements).forEach(i => {
            if (i.type == 'checkbox') {
                if (i.checked) {
                    bookInfo.push('Read');
                }
                else {
                    bookInfo.push('Not Read Yet');
                }
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