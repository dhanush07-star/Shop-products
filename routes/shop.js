const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/product-list',shopController.getProducts);

router.get('/product-list/:productId',shopController.getProductByID);

router.get('/product-detail');

router.get('/cart',shopController.getCart);

router.post('/cart',shopController.postCart)

router.get('/checkout',shopController.getCheckout);

router.get('/orders',shopController.getOrders);

//router.get('/index');






module.exports = router;
