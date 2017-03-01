const router = require('express').Router();
const db = require('APP/db');

//Admin routes for product
router.use('/products', require('./products'))

module.exports = router;
