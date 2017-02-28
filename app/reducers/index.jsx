import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  product: require('./product').default,
  category: require('./categories').default
})

export default rootReducer
