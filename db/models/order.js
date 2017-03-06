'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('created', 'processing', 'cancelled', 'completed'),
    defaultValue: 'created'
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  total: {
    type: Sequelize.FLOAT,
    allowNull: false
  }


})

module.exports = Order;
