'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const OrderItem = db.define('orderItem', {
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
    // beforeCreate: (orderItem) => {
    //   orderItem.price = orderItem.getProduct().price;
    //   orderItem.quantity = orderItem.getProduct().quantity;
    // }
  }
})

module.exports = OrderItem;
