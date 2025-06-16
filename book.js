export class Book {
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