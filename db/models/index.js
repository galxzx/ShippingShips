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
User.hasMany(Review)
Product.hasMany(Review)
Review.belongsTo(Product)
Product.hasMany(Review)
User.hasOne(OAuth)
Order.belongsTo(User)
Order.hasMany(OrderItem)
OrderItem.belongsTo(Product)
// Product.belongsToMany(Category, {through: 'product_category'})
// Category.belongsToMany(Product, {through: 'product_category'})

module.exports = {User, Review, Product, Order, OrderItem}
