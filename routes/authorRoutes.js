
const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

// GET ALL Authors 
router.get('/getservice', authorController.getAllService);

// GET  Author BY ID
router.get('/getproducts', authorController.getAllProducts);

// ADD AUTHOR
router.get('/getproducts', authorController.getAllProducts);

module.exports = router;