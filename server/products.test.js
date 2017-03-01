const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Product = require('APP/db/models/product')
const app = require('./start')

describe('/api/products', () => {
  before(function () {
    return db.sync({force: true});
  });

  afterEach(function () {
    return db.sync({force: true});
  });


  describe('gets all products from DB', () => {
    beforeEach(function(){
    return Product.create({title: 'something', description: "some words", categories:['foo, bar'], price: 1.00, inventory: 5})
    .then(()=>{
      return Product.create({title: 'something else', description: "some words to say", categories:['foo, bar'], price: 1.00, inventory: 5})
    });
  });

    it('GET / ', () =>
      request(app)
        .get(`/api/products`)
        .then(res =>
              expect(res.body.length).to.equal(2))
    )

    it('Get /:productId returns a product', () =>
      request(app)
        .get('/api/products/1')
        .then(res => {
          expect(res.body).to.contain({
            title: 'something'
          })
        })
    )

    it('Get /:productId returns 404 if not found', () =>
      request(app)
        .get('/api/products/475')
        .expect(404)
    )
  })
})
