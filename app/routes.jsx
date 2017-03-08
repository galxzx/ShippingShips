'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import axios from 'axios'

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import SignUp from './components/SignUp'
import App from './components/App'
import CartContainer from './containers/CartContainer'
import ProductContainer from './containers/ProductContainer'
import ProductsContainer from './containers/ProductsContainer'
import UserContainer from './containers/UserContainer'
import CheckoutContainer from './containers/CheckoutContainer'

import {loadProducts, loadProduct} from './reducers/product'
import {setCategories} from './reducers/categories'
import {loadCartFromLocal} from './reducers/cart'


const onAppEnter = () => {
  store.dispatch(loadCartFromLocal())
  store.dispatch(loadProducts())
}

const onProductEnter = (paramInfo) => {
  const productId = paramInfo.params.productId
  store.dispatch(loadProducts())
  store.dispatch(loadProduct(productId))
}
    
export default function Root () {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App} onEnter={onAppEnter}>
          <Route path="/products" component={ProductsContainer} />
          <Route path="/product/:productId" component={ProductContainer} onEnter={onProductEnter}  />
          <Route path="/productReview" component={ProductContainer}  />
          <Route path="/cart" component={CartContainer} />
          <Route path="/signup" component={SignUp} />
          <Route path="/users/:userId" component={UserContainer}  />
          <Route path="/checkout" component={CheckoutContainer} />
          <IndexRedirect to="/products"/>
        </Route>
      </Router>
    </Provider>
  );
}
