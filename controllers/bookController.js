const bookService = require('../services/bookService');

exports.getAllBooks = async (req, res) => {
    try {
        const allBooks = await bookService.getAllBooks();
        res.json(allBooks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBookById = async (req, res) => {
    try {
        const bookId = req.params.id;
        const bookById = await bookService.getBookById(bookId);
        res.json(bookById);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addBook = async (req, res) => {
    try {
       const book = req.body
        const books = await bookService.createBook(book);
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};