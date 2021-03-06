'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/auth', require('./auth'))
  .use('/admin', require('./admin'))
  .use('/users', require('./users'))
  .use('/products', require('./products'))
  .use('/orders', require('./orders'))
  .use('/reviews', require('./reviews'))


// No routes matched? 404.
api.use((req, res) => res.status(404).end())
