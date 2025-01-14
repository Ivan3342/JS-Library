const openDialogButton = document.querySelector("#add-book");
const addBookButton = document.querySelector("#add");
const closeDialogButton = document.querySelector("#close")
const libraryContainer = document.querySelector(".library");
const dialog = document.querySelector('#dialog');
const bookForm = document.querySelector("#book-form");

let bookList = [];

const displayBooks = () => {
    let booksHTML = "";
    booksHTML += bookList.map((book) => {
        return `
            <div class="book">
                <h1 class="name">${book.name} (${book.year})</h1>
                <h3 class="writer">${book.writer}</h3>
                <p class="isbn">${book.isbn}</p>
                <button>Rent Now!</button>
            </div>
        `
    }).join('');
    libraryContainer.innerHTML = booksHTML;
}

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
        cover: bookForm.cover.value
    }
    bookList.push(book);
    displayBooks();
})

