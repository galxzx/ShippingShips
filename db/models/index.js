'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')
//const Category = require('./category')

const Product = require('./product');
const Review = require('./review')
const Order = require('./order')
const OrderItem = require('./orderItem')

OAuth.belongsTo(User)

Review.belongsTo(User)
Review.belongsTo(Product)

User.hasMany(Review)
User.hasMany(Order)
User.hasOne(OAuth)

Product.hasMany(Review)
Product.hasMany(Review)
Product.hasMany(OrderItem)

Order.belongsTo(User)
Order.hasMany(OrderItem)
OrderItem.belongsTo(Order)
OrderItem.belongsTo(Product)
// Product.belongsToMany(Category, {through: 'product_category'})
// Category.belongsToMany(Product, {through: 'product_category'})

module.exports = {User, Review, Product, Order, OrderItem}
