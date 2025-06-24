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
                <h2 class="detail-title">${this.title} (${this.year}) - ${this.author}</h2>
                <div class="book-info hidden">
                    <p><strong>Author:</strong> ${this.author}</p>
                    <p><strong>Year:</strong> ${this.year}</p>
                    <p><strong>Genre:</strong> ${this.genre}</p>
                    <p><strong>ISBN:</strong> ${this.isbn}</p>
                </div>
                <button class="toggle-details">Toggle Details</button>
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
    document.querySelectorAll(".toggle-details").forEach(button => {
        button.addEventListener("click", (e) => {
            e.target.previousElementSibling.classList.toggle("hidden");
        })
    })
}


const fetchBooks = async () => {
        const response = await fetch("books.json").then(res => res.json()).then(data => data.content);
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