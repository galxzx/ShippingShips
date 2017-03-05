'use strict'

const db = require('APP/db')
const User = db.model('users')

const {mustBeLoggedIn, forbidden} = require('./auth.filters')

module.exports = require('express').Router()
	.get('/', forbidden('only admins can list users'), (req, res, next) =>
		User.findAll()
		.then(users => res.json(users))
		.catch(next))
	.post('/', (req, res, next) => {
		return User.create(req.body)
		.then(user => res.status(201).json(user))
		.catch((err)=>{
			//err.status = 303;
			if(err.message === 'Validation error')
			//res.status(303).send({message: "Invalid email: user may already exist"})
			err.status = 303;
			next(err)

		})
	})
	.get('/:id', mustBeLoggedIn, (req, res, next) =>
		User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(next))
