'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')
const Category = require('./category')
const Promise = require('bluebird')

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
	// },
	// hooks: {
	// 	beforeCreate: (product) => {
	// 		//console.log(product);
	// 		if(product.categories.length < 1) throw new Error('Product must have at least one category');
	// 		const categories = Promise.map(product.categories, category => {
	// 		return	Category.findOrCreate({where: {
	// 				name: category
	// 			}})
	// 			.then(([category, created]) => {
	// 				product.addCategory(category)
	// 			})
	// 			.catch(console.error)
	// 		})


	// 	}
	// }
})

module.exports = Product;
