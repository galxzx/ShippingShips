'use strict'

const db = require('APP/db')
const Product = require('../db/models/product')
const Category = require('../db/models/category')

module.exports = require('express').Router()
  .get('/', (req, res, next) =>
    Product.findAll({ include:  [Category] })
    .then(products => res.json(products))
    .catch(next))
  .param('productId', (req, res, next, theProductId) =>
    Product.findOne({where: {id:theProductId}, include: [Category]})
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
    .catch(next))
  .get('/:productId', (req, res) => 
    res.json(req.product))
