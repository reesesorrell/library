let userLibrary = []

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;

    this.info = function() {
        let info = '';
        info += this.title + ' by ' + this.author + ', ' + this.pages + ' pages,';
        if (this.haveRead) {
            info += ' read';
        }
        else {
            info += ' not read yet';
        }
        return info;
    }
}

function addBookToLibrary(title, author, pages, haveRead) {
    const book = new Book(title, author, pages, haveRead);
    userLibrary.push(book)
}

function displayBooks(bookList) {
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

addBookToLibrary('Mistborn', 'Brandon', 900, true)
addBookToLibrary('Elantris', 'Brandon', 300, true)
displayBooks(userLibrary)