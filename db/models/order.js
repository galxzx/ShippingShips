'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('order', {
  guest: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }

}, {
  hooks:{
    beforeCreate: (order) => {
      if(order.userId) {
        order.guest = false;
      }
    },
    beforeUpdate: (order) => {
      if(order.userId) {
        order.guest = false;
      }
    }
  }
})

module.exports = Order;
