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
        categories: [ 'powerboat', 'pleasureboat']
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

    it('does not create a product without an empty string as a title', () => {
      product.title='';
       return product.validate()
      .then((result) => {
        expect(result).to.be.an.instanceOf(Error);
        expect(result.message).to.contain('title cannot be null');
      })
    })





  })
})