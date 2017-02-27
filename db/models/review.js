'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Review = db.define('review', {
	stars: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	content: {
		type: Sequelize.TEXT,
		allowNull: false
	}

})

module.exports = Review;
