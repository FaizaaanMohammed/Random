const express = require("express");

const router = express.Router();

const ProductController = require('../controllers/product.js')



router.post('/create' , ProductController.createProduct)
router.get('/getAllProduct' , ProductController.getAllProduct)


module.exports = router