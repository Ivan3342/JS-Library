const openDialogButton = document.querySelector("#add-book");
const addBookButton = document.querySelector("#add");
const closeDialogButton = document.querySelector("#close")
const libraryContainer = document.querySelector(".library");
const dialog = document.querySelector('#dialog');
const bookForm = document.querySelector("#book-form");

//let bookList = [];
let bookList = [];

const getFromLocalStorage = () => {
    const reference = localStorage.getItem('books');

    if(reference) {
        bookList = JSON.parse(reference);
        displayBooks(bookList);
    }
}

const addToLocalStorage = () => {
    localStorage.setItem('books', JSON.stringify(bookList));
    displayBooks(bookList);
}

const displayBooks = () => {
    let books = JSON.parse(localStorage.getItem('books'));
    let booksHTML = "";
    booksHTML += books.map((book) => {
        if(book.userMade) {
            return `
                <div class="book">
                    <div class="book-info">
                        <h1 class="name">${book.name} (${book.year})</h1>
                        <h3 class="writer">${book.writer}</h3>
                        <p class="isbn">ISBN: ${book.isbn}</p>
                        <p class="condition">Condition: ${book.condition}</p>
                    </div>
                    <div class="flex">
                    <button class="button">Rent Now!</button>
                    <button class="button remove">Remove</button>
                    </div>
                </div>
            `
        }
        else {
            return `
            <div class="book">
                <div class="book-info">
                    <h1 class="name">${book.name} (${book.year})</h1>
                    <h3 class="writer">${book.writer}</h3>
                    <p class="isbn">ISBN: ${book.isbn}</p>
                    <p class="condition">Condition: ${book.condition}</p>
                </div>
                <button class="button">Rent Now!</button>
            </div>
        `
        }
    }).join('');
    libraryContainer.innerHTML = booksHTML;
    document.getElementsByClassName("remove").forEach(button => {
        button.addEventListener("click", () => {
            const removeBook = (e) => {
                console.log(e);
            }
        })});
}



getFromLocalStorage();

openDialogButton.addEventListener("click", () => {
    dialog.showModal();
});

closeDialogButton.addEventListener("click", () => {
    dialog.close();
});

addBookButton.addEventListener("click", () => {
    let book = {
        name: bookForm.name.value,
        writer: bookForm.writer.value,
        isbn: bookForm.isbn.value,
        year: bookForm.year.value,
        condition: bookForm.condition.value,
        cover: bookForm.cover.value,
        userMade: true
    }
    bookList.unshift(book);
    localStorage.setItem('books', JSON.stringify(bookList));
    displayBooks();
    console.log(bookList);
})