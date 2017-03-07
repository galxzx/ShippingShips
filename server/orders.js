'use strict'

const db = require('APP/db')
const Order = require('../db/models/order')
const OrderItem = require('../db/models/orderItem')


module.exports = require('express').Router()
  .get('/', (req, res, next) => {
    console.log('wwwttttfffff')
    Order.findAll({ include:  [OrderItem] })
    .then(orders => {console.log('ooordderrz',orders);res.json(orders)})
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
    console.log(req.body)
    Order.create(req.body.order, {include: [{model:OrderItem}]})
    .then(order => res.json(order))
    .catch(next);
  })
