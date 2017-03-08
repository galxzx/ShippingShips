'use strict'
const app = require('APP'), {env} = app
const db = require('APP/db')
const Product = require('../db/models/product')
const Order = require('../db/models/order')
const OrderItem = require('../db/models/orderItem')
const stripe = require('stripe')(env.STRIPE_SECRET);
const {mustBeLoggedIn, forbidden, mustBeAdmin} = require('./auth.filters')


module.exports = require('express').Router()
  .get('/', (req, res, next) => {
    Order.findAll({ include: [ {model: OrderItem, include: [Product]}] })
    .then(orders =>res.json(orders))
    .catch(next)})
  .param('orderId', (req, res, next, theOrderId) =>
    Order.findOne({where: {id:theOrderId}, include:[ {model: OrderItem, include: [Product]}] })
    .then(order => {
      if (!order) {
        const err = Error('Order Not Found');
        err.status = 404;
        throw err
      }
        req.order = order;
        next();
        return null;
    })
    .catch(next))
  .get('/:orderId', (req, res) =>
    res.json(req.order))
  .post('/', (req, res, next) => {
    Order.create(req.body.order, {include: [{model:OrderItem}]})
    .then(order => {
        stripe.charges.create({
          amount: order.total,
          currency: "usd",
          description: "example order",
          metadata: {order_id: order.id},
          source: req.body.token.token.id
        }, (err, charge)=> {
          if(err){
            res.send(err)
          }
          else{
            order.update({status: 'processing'})
            .then(()=> res.send(charge))
          }

      })
    }).catch(next)
    })

  .get('/users/:userId', (req, res, next) => {
    Order.findAll({where:{user_id:req.params.userId}, include: [ {model: OrderItem, include: [Product]}] })
    .then(orders=>
      res.send(orders)
    ).catch(next)
  })

  .put('/:orderId', mustBeAdmin,  (req, res, next)=> {
    Order.findById(req.params.orderId)
    .then(order => {
      return order.update({status: req.body.status})
      .then(order => {
        res.send(order)
      })
    })
    .catch(next)
  })

  .get('/admin/:orderId', (req, res, next) => {
    Order.findById(req.params.orderId, {
      include: [{
        model: OrderItem,
        include: [{model:Product}]
      }]})
    .then(order => res.send(order))
  })
