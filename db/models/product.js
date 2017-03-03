'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')
const Review = require('./review')
const Promise = require('bluebird')

const Product = db.define( 'product',  {
	title: {
		type: Sequelize.STRING,
		allowNull: false,
		validate : {
			notEmpty : true
		}
	},
	description: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	price: {
		type: Sequelize.FLOAT,
		allowNull: false
	},
	inventory: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	photoURL: {
		type: Sequelize.STRING,
		defaultValue: 'http://blogs.warwick.ac.uk/images/jmears/2007/05/23/7_popeye_boat.jpg'
	},
	categories: {
		type: Sequelize.ARRAY(Sequelize.STRING),
		allowNull: false
	}

}, {
	getterMethods: {

	},
	instanceMethods: {
		addInventory: function(numToAdd){
			this.inventory = this.inventory + numToAdd;
		}
	},
	classMethods: {

	},

	hooks: {
		beforeCreate: (product) => {
			if(product.categories.length < 1) throw new Error('Product must have at least one category');
		}
	}

})

module.exports = Product;
