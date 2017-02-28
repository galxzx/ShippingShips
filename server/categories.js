'use strict'

const db = require('APP/db')
const Product = require('../db/models/product')
const Category = require('../db/models/category')

module.exports = require('express').Router()
  .get('/', (req, res, next) =>
    Category.findAll()
    .then(categories => res.json(categories))
    .catch(next))
  // .param('productId', (req, res, next, theProductId) =>
  //   Product.findOne({where: {id:theProductId}, include: [Category]})
  //   .then(product => {
  //     if (!product) {
  //       const err = Error('Product Not Found');
  //       err.status = 404;
  //       throw err
  //     }
  //       req.product = product;
  //       next();
  //       return null;
  //   })
  //   .catch(next))
  .get('/:catId', (req, res, next) => {
    Category.findOne({where: {id: req.params.catId}, include: [Product]})
    .then(category => {
      if(!category) {
        const err = Error('Product Not Found');
        err.status = 404;
        throw error;
      }
      res.json(category)
    })
    .catch(next)
  })

