const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getProducts);

router.get('/cart');

router.get('/checkout');

router.get('/index');

router.get('/product-detail');




module.exports = router;
