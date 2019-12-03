const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-author');

const Order = require('../models/order');
const Product = require('../models/product');

const OrdersController = require('../controllers/orders');
//Handle incoming GET request to /orders
router.get('/', checkAuth, OrdersController.ordersGetAll);

router.post('/', checkAuth, OrdersController.ordersCreateOrder);

router.get('/:orderId', checkAuth, OrdersController.ordersGetOrder);


router.delete('/:orderId', checkAuth, OrdersController.ordersDeleteOrder);

module.exports = router;