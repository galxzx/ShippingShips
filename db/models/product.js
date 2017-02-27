'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Product = db.define( 'product',  {
	title: {
		type: Sequelize.STRING,
		allowNull: false
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
		type: Sequelize.INTEGER.UNSIGNED,
		allowNull: false
	},
	photoURL: {
		type: Sequelize.STIRNG,
		defaultValue: 'http://blogs.warwick.ac.uk/images/jmears/2007/05/23/7_popeye_boat.jpg'
	}

}, {
	instanceMethods: {
		addInventory: function(numToAdd){
			this.inventory = this.inventory + numToAdd;
		}
	},
	classMethods: {

	},
	hooks: {
		beforeCreate: (product) => {
			product.countCategories()
			.then( (count) => {
				if (count < 1) throw new Error('Product must have at least one category')
			})
			.catch(console.error);
		}
	}
})

module.exports = Product;
