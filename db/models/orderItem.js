'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')
const Product = require('./product')

const OrderItem = db.define('orderItem', {
  price: {
    type: Sequelize.FLOAT
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

}, {
  // hooks: {
  //   beforeCreate: (orderItem) => {
  //     Product.findById(orderItem.product_id)
  //     .then(product => orderItem.price = product.price)
  //     .catch(console.error)
  //   }
 // }
})

module.exports = OrderItem;
