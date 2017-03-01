'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import axios from 'axios'

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import App from './components/App'
import ProductContainer from './containers/ProductContainer'
import ProductsContainer from './containers/ProductsContainer'

import {setProducts} from './reducers/product'
import {setCategories} from './reducers/categories'


const onAppEnter = () => {
  const pProducts = axios.get('api/products');
  const pCategories = axios.get('api/categories');

  return Promise.all([pProducts, pCategories])
    .then(responses => responses.map(r => r.data))
    .then(([products, categories]) => {
      store.dispatch(setProducts(products));
      store.dispatch(setCategories(categories));
    })
}


export default function Root () {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App} onEnter={onAppEnter}>
          <Route path="/products" component={ProductsContainer}/>
          <IndexRedirect to="/products"/>
        </Route>
      </Router>
    </Provider>
  );
}
