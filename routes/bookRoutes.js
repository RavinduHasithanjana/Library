
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// GET ALL books with pagination 
router.get('/getallbooks', bookController.getAllBooks);

// GET  Book BY ID
router.get('/getbookbyid/:id', bookController.getBookById);

// ADD Book
router.post('/addbook', bookController.addBook);

module.exports = router;