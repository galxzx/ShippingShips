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
import AddProductContainer from './containers/AddProductContainer'
import LandingContainer from './containers/LandingContainer'
import AdminOrdersContainer from './containers/AdminOrdersContainer'

import {setProducts} from './reducers/product'
import {setCategories} from './reducers/categories'
import {loadCartFromLocal} from './reducers/cart'
 import {loadUserOrders, loadAllOrders} from './reducers/user'


const onAppEnter = () => {
  const pProducts = axios.get('api/products');
  return pProducts.then(res => res.data)
    .then(products => store.dispatch(setProducts(products)))
    .then( () => store.dispatch(loadCartFromLocal()))
    .catch(e=>console.e)
}




const onUserEnter = () => {
  return store.dispatch(loadUserOrders())
}

const adminOrderEnter = () => {
  return store.dispatch(loadAllOrders())
}

export default function Root () {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App} onEnter={onAppEnter}>
          <Route path="/products" component={ProductsContainer} />
          <Route path="/product" component={ProductContainer}  />
          <Route path="/productReview" component={ProductContainer}  />
          <Route path="/cart" component={CartContainer} />
          <Route path="/signup" component={SignUp} />
          <Route path="/users/:userId" component={UserContainer}  />
          <Route path="/checkout" component={CheckoutContainer} />
          <Router path="/admin"  component={LandingContainer}>
            <Route path="/admin/addProduct" component={AddProductContainer} />
            <Route path="/admin/landing"  />
            <Route path="admin/orders" component={AdminOrdersContainer} onEnter={adminOrderEnter} />
            <IndexRedirect to="/admin/landing" />
          </Router>
          <IndexRedirect to="/products" />
        </Route>
      </Router>
    </Provider>
  );
}
