const express = require('express')
const router = express.Router();

const productsController = require('../controllers/products')

//Create -> POST
router.post('/product',productsController.createProduct);

//READ -> GET
router.get('/products',productsController.getAllProducts);





moudle.exports = router;