const db = require('APP/db')
const Category = require('./models/category');
const Product = require('./models/product')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedProducts = () => db.Promise.map([
  {title: 'Sos Your Mom', description: 'This is a description', price: 1000, inventory: 5, categories: [{name: 'powerboat'}, {name: 'pleasureboat'}]},  {title: 'Weather Oar Knot', description: 'Here are some workds', price: 4000, inventory: 5, categories: [{name: 'powerboat'}, {name: 'pleasureboat'}]},  {title: 'Row vs Wade', description: 'Something to say', price: 0, inventory: 5, categories: [{name: 'sailboat'}, {name: 'pleasureboat'}]},  {title: 'Anchors Away', description: 'Something about a thing', price: 200000, inventory: 5, categories: [{name: 'powerboat'}, {name: 'commercial'}]},  {title: 'BobbleHead', description: 'Splish splash', price: 10000, inventory: 5, categories: [{name: 'powerboat'}, {name: 'pleasureboat'}]}], product => Product.create(product, {include: [Category]}))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedProducts)
  .catch(error => console.error(error))
  .finally(() => db.close())
