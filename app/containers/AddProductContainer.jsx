import AddProduct from '../components/AddProduct';
import {Field, reduxForm} from 'redux-form';
import validate from '../components/checkoutValidate'
import {addProduct} from '../reducers/product'
import {connect} from 'react-redux'


const mapstate = () => {
  return {};
}

const mapDisptachToProps = (dispatch) => {
  return {
    addProduct (product) {dispatch(addProduct(product))}
    // : (address, token) => dispatch(checkoutCart(address, token))
  }
}

const ProductForm = reduxForm({
  form: 'product',
  validate
})(AddProduct)

export default connect(mapstate, mapDisptachToProps)(ProductForm);
