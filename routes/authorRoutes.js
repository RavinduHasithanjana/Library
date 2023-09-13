
const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

// GET ALL Authors 
router.get('/getall', authorController.getAllAuthors);

// GET  Author BY ID
router.get('/getbyid/:id', authorController.getAuthorById);

// ADD AUTHOR
router.post('/add', authorController.addAuthor);

module.exports = router;