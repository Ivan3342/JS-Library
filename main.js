const openDialogButton = document.querySelector("#add-book");
const addBookButton = document.querySelector("#add");
const closeDialogButton = document.querySelector("#close")
const libraryContainer = document.querySelector(".library");
const dialog = document.querySelector('#dialog');
const bookForm = document.querySelector("#book-form");

//let bookList = [];
let bookList = [
    {
        name: "1984",
        writer: "George Orwell",
        isbn: "9780451524935",
        year: "1949",
        condition: "Good",
        cover: "https://example.com/covers/1984.jpg"
    },
    {
        name: "To Kill a Mockingbird",
        writer: "Harper Lee",
        isbn: "9780061120084",
        year: "1960",
        condition: "New",
        cover: "https://example.com/covers/to-kill-a-mockingbird.jpg"
    },
    {
        name: "The Great Gatsby",
        writer: "F. Scott Fitzgerald",
        isbn: "9780743273565",
        year: "1925",
        condition: "Like New",
        cover: "https://example.com/covers/the-great-gatsby.jpg"
    },
    {
        name: "Pride and Prejudice",
        writer: "Jane Austen",
        isbn: "9781503290563",
        year: "1813",
        condition: "Used",
        cover: "https://example.com/covers/pride-and-prejudice.jpg"
    },
    {
        name: "The Catcher in the Rye",
        writer: "J.D. Salinger",
        isbn: "9780316769488",
        year: "1951",
        condition: "Fair",
        cover: "https://example.com/covers/the-catcher-in-the-rye.jpg"
    },
    {
        name: "The Hobbit",
        writer: "J.R.R. Tolkien",
        isbn: "9780547928227",
        year: "1937",
        condition: "Good",
        cover: "https://example.com/covers/the-hobbit.jpg"
    },
    {
        name: "Moby Dick",
        writer: "Herman Melville",
        isbn: "9781503280786",
        year: "1851",
        condition: "Used",
        cover: "https://example.com/covers/moby-dick.jpg"
    },
    {
        name: "War and Peace",
        writer: "Leo Tolstoy",
        isbn: "9780199232765",
        year: "1869",
        condition: "Good",
        cover: "https://example.com/covers/war-and-peace.jpg"
    },
    {
        name: "The Alchemist",
        writer: "Paulo Coelho",
        isbn: "9780061122415",
        year: "1988",
        condition: "Like New",
        cover: "https://example.com/covers/the-alchemist.jpg"
    },
    {
        name: "Brave New World",
        writer: "Aldous Huxley",
        isbn: "9780060850524",
        year: "1932",
        condition: "New",
        cover: "https://example.com/covers/brave-new-world.jpg"
    }
];



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
    }).join('');
    libraryContainer.innerHTML = booksHTML;
}

const removeBook = (e) => {
    console.log(e);
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
        cover: bookForm.cover.value
    }
    bookList.push(book);
    localStorage.setItem('books', JSON.stringify(bookList));
    displayBooks();
    console.log(bookList);
})
