
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// GET ALL books with pagination 
router.get('/getservice', bookController.getAllService);

// GET  Book BY ID
router.get('/getproducts', bookController.getAllProducts);

// ADD Book
router.get('/getproducts', bookController.getAllProducts);

module.exports = router;