const openDialogButton = document.querySelector("#add-book");
const addBookButton = document.querySelector("#add");
const closeDialogButton = document.querySelector("#close")
const libraryContainer = document.querySelector(".library");
const dialog = document.querySelector('#dialog');
const bookForm = document.querySelector("#book-form");

let bookList = [];

openDialogButton.addEventListener("click", () => {
    dialog.showModal();
});

closeDialogButton.addEventListener("click", () => {
    dialog.close();
});