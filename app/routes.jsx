'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import App from './components/App'
import ProductContainer from './containers/ProductContainer'
import ProductsContainer from './containers/ProductsContainer'

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
)


export default function Root () {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App} >
          <Route path="/products" component={ProductsContainer}/>
          <IndexRedirect to="/products"/>
        </Route>
      </Router>
    </Provider>
  );
}