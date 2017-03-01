'use strict'

const db = require('APP/db')
const Product = require('./product')
const Category = require('./category')

const {expect} = require('chai')

describe('Product', () => {
  before('wait for the db', () => db.didSync)

  let product;
  beforeEach(()=>
    product = Product.build(
      { description: 'This is a description', 
        price: 1000, 
        inventory: 5, 
        categories: [{name: 'powerboat'}, {name: 'pleasureboat'}]
    })
  )

  describe('two title validation: notNull, notEmpty', () => {
    it('does not create a product without a title', () => {
      product.title=null;
       return product.validate()
      .then((result) => {
        expect(result).to.be.an.instanceOf(Error);
        expect(result.message).to.contain('title cannot be null');
      })
    })
  })
})