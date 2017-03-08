'use strict'

const db = require('APP/db')
const Product = require('../db/models/product')
const User = require('../db/models/user')
const Review = require('../db/models/review')

module.exports = require('express').Router()
  .get('/', (req, res, next) =>
    Product.findAll({include: [ { model: Review, include: [User]}]})
    .then(products => res.json(products))
    .catch(next))

  .param('productId', (req, res, next, theProductId) =>
    Product.findOne({where: {id:theProductId}, include: [ {model: Review, include: [User]}] })
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

  .get('/:productId', (req, res, next) => {
    res.json(req.product)
    })

  .get('/cat/:category', (req, res, next) => {
    console.log(req.params.category)
    Product.findAll({
      where:{
        categories: {
          $overlap: [req.params.category]
        }
      },include: [ {model: Review, include: [User]}]

    })
    .then(products => res.json(products))
    .catch(next);
  })
