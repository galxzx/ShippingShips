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
      Product.findById(orderItem.product_id)
      .then(product => orderItem.price = product.price)
      .catch(console.error)
    }
  }
})

module.exports = OrderItem;
