import React from 'react'
import chai, {expect} from 'chai'
chai.use(require('chai-enzyme')())
import {shallow} from 'enzyme'
import {spy} from 'sinon'
chai.use(require('sinon-chai'))
import {createStore} from 'redux'

import ProductContainer from '../containers/ProductContainer'
import Product from './Product'

describe ('<Product />', () => {
  const selectedProduct =
    {title: 'Sos Your Mom', description: 'This is a description', price: 1000, inventory: 5, categories: ['powerboat','pleasurecraft'], reviews:[]}
  const addItem = spy()
  let root;
  beforeEach('render the root', () =>
    root = shallow(<Product selectedProduct={selectedProduct} addItemToCart={addItem} />)
  )

  it('displays the product name', () => {
    expect(root.text()).to.contain(selectedProduct.title)
  })

  it('has a addItemToCart button', () => {
    expect(root.find('button.cart-btn')).to.have.length(1)
  })

  it('calls addItemTOCart when add To Cart is clicked', ()=> {
    root.find('button.cart-btn').simulate('click')
    expect(addItem).to.have.been.called
  })

})
