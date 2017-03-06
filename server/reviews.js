'use strict'

const db = require('APP/db')
const Review = require('../db/models/review') 
const User = require('../db/models/user') 
const Product = require('../db/models/user') 

module.exports = require('express').Router()
  .post('/', (req, res, next) => {
    Review.create({
      content: req.body.reviewContent,
      stars: req.body.reviewStars,
      user_id: req.body.user.id,
      product_id: req.body.productId
    })
    .then(review=>
      res.send(review)
    )
    .catch(next)})

  .delete('/:reviewId', (req,res,next)=>{
    Review.destroy({where: {id: req.params.reviewId}})
    .then(review=>
      res.send(req.params.reviewId)
    )
    .catch(next)
  })

