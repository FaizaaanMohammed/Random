const express = require("express");

const router = express.Router();

const ProductController = require('../controllers/product.js')



router.post('/create' , ProductController.createProduct)


module.exports = router