const Book = require('../models/book');

class BookService {

    async getAllBooks() {
        try {
            const allBooks = await Book.findAll();
            return allBooks;
        } catch (error) {
            throw new Error('Error fetching all Book from the database');
        }
    }


    async getBookById(bookId) {
        try {
            const byIdBook = await Book.findById(authorId);
            return byIdBook;
        } catch (error) {
            throw new Error('Error fetching all Book from the database');
        }
    }

    async createBook(bookData) {
        try {
            const book = await Book.create(bookData);
            return book;
        } catch (error) {
            throw new Error('Error fetching all Book from the database');
        }
    }

}

module.exports = new BookService();