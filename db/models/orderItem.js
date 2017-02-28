'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const OrderItem = db.define('order', {
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }

}, {
  hooks: {
    beforeCreate: (orderItem) => {
      orderItem.price = orderItem.product.price;
      orderItem.quantity = orderItem.product.quantity;
    }
  }
})

module.exports = OrderItem;
