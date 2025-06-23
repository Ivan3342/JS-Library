class Book {
    constructor(title, author, year, genre, isbn) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
        this.isbn = isbn;
    }
    getDetailsHTML = () => {
        return `
            <div class="book-details">
                <h2>${this.title} (${this.year}) - ${this.author}</h2>
                <div class="book-info hidden">
                    <p><strong>Author:</strong> ${this.author}</p>
                    <p><strong>Year:</strong> ${this.year}</p>
                    <p><strong>Genre:</strong> ${this.genre}</p>
                    <p><strong>ISBN:</strong> ${this.isbn}</p>
                </div>
                <button class="toggle-details">Toggle Details</button>
            </div>
        `;
    }
}


const books = [];
const collection = document.getElementById("collection-items");

const renderBooks = () => {
    collection.innerHTML = "";
    books.forEach(book => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book-item");
        bookElement.innerHTML = book.getDetailsHTML();
        collection.appendChild(bookElement);
    });
}


const fetchBooks = async () => {
        const res = await fetch("books.json");
        const data = await res.json();
        const response = data.content;
        response.forEach(bookData => {
            const newBook = new Book(
                bookData.title,
                bookData.author,
                bookData.year,
                bookData.genre,
                bookData.isbn
            );
            books.push(newBook);
        });
        renderBooks();
};

document.addEventListener("DOMContentLoaded", () => {
    fetchBooks();
});