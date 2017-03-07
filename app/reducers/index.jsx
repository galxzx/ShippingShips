import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import checkoutValidate from '../components/checkoutValidate'


const rootReducer = combineReducers({
  auth: require('./auth').default,
  product: require('./product').default,
  category: require('./categories').default,
  cart: require('./cart').default,
  signup: require('./signup').default,
  form: form,
  review: require('./review').default,
  signup: require('./signup').default,
  user: require('./user').default
})

export default rootReducer
