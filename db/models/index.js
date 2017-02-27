'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')
const Category = require('./category')
const Product = require('./product');

//hey alan!

OAuth.belongsTo(User)
User.hasOne(OAuth)
Product.hasMany(Category)
module.exports = {User, Category}
