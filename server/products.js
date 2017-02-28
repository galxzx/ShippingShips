'use strict'

const express = require('express');
const router = new express.Router();
const db = require('APP/db')
const Product = require('../db/models/product')
module.exports = router;


router.get('/', function (req, res, next) {
  Product.findAll()
  .then(products => res.json(products))
  .catch(next);
});

router.param('productId', function (req, res, next, theProductId) {
  Product.findById(theProductId)
  .then(product => {
    if (!product) {
      const err = Error('Product Not Found');
      err.status = 404;
      throw err
    }
    req.product = product;
    next();
    return null; 
  })
  .catch(next);
});

router.get('/:productId', function (req, res) {
  res.json(req.product);
});