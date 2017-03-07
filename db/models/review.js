'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Review = db.define('review', {
	stars: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {isIn:[[0,1,2,3,4,5]]}
	},
	content: {
		type: Sequelize.TEXT,
		allowNull: false,
		notEmpty: true,
		len: [5,500]
	}

})

module.exports = Review;
