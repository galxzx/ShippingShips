import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  product: require('./product').default,
  category: require('./categories').default,
  cart: require('./cart').default,
  signup: require('./signup').default
})

export default rootReducer
