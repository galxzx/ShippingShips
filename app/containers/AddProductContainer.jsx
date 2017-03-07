import AddProduct from '../components/AddProduct';
import {Field, reduxForm} from 'redux-form';
import validate from '../components/checkoutValidate'
import {addProduct} from '../reducers/product'
import {connect} from 'react-redux'




const mapDisptachToProps = (dispatch) => {
  return {
    addProduct (product) {dispatch(addProduct(product))}
    // : (address, token) => dispatch(checkoutCart(address, token))
  }
}

const ProductForm = reduxForm({
  form: 'checkout',
  validate
})(AddProduct)

export default connect({}, mapDisptachToProps)(ProductForm);
