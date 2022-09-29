const express = require('express');
const {AddProducts, GetProducts, UpdatedProducts, DeleteProducts } = require('../controllers/productController');
const router = express.Router();


router.post('/',AddProducts)

router.get('/',GetProducts)

router.put('/:id',UpdatedProducts)

router.delete('/:id',DeleteProducts)


module.exports = router