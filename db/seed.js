const db = require('APP/db')
const Category = require('./models/category');
const Product = require('./models/product')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedProducts = () => db.Promise.map([
  {title: '', description: '', price: 0, inventory: 5, categories: [{name: 'powerboat'}, {name: 'pleasureboat'}]},
  {title: '', description: '', price: 0, inventory: 5, categories: [{name: 'powerboat'}, {name: 'pleasureboat'}]},
  {title: '', description: '', price: 0, inventory: 5, categories: [{name: 'powerboat'}, {name: 'pleasureboat'}]},
  {title: '', description: '', price: 0, inventory: 5, categories: [{name: 'powerboat'}, {name: 'pleasureboat'}]},
  {title: '', description: '', price: 0, inventory: 5, categories: [{name: 'powerboat'}, {name: 'pleasureboat'}]}
], product => Product.create(product, {include: [Category]}))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedProducts)
  .catch(error => console.error(error))
  .finally(() => db.close())
