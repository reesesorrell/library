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
    console.log('calling')
    for (let i = 0; i<bookList.length;  i++) {
        console.log(bookList[i]);
    }
}

