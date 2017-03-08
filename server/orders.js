'use strict'
const app = require('APP'), {env} = app
const db = require('APP/db')
const Order = require('../db/models/order')
const OrderItem = require('../db/models/orderItem')
const stripe = require('stripe')(env.STRIPE_SECRET);
const {mustBeLoggedIn, forbidden, mustBeAdmin} = require('./auth.filters')


module.exports = require('express').Router()
  .get('/', (req, res, next) => {
    Order.findAll({ include:  [OrderItem] })
    .then(orders =>res.json(orders))
    .catch(next)})
  .param('orderId', (req, res, next, theOrderId) =>
    Order.findOne({where: {id:theOrderId}, include: [OrderItem]})
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
    Order.findAll({where:{user_id:req.params.userId}, include: [OrderItem]})
    .then(orders=>
      res.send(orders)
    ).catch(next)
  })

  .put('/:orderId', (req, res, next)=> {
    console.log('body', req.body)
    Order.findById(req.params.orderId)
    .then(order => {
      return order.update({status: req.body.status})
      .then(order => {
        console.log(order)
        res.send(order)
      })
    })
    .catch(next)
  })
