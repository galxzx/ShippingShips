import AdminOrders from '../components/AdminOrders';
import {connect} from 'react-redux'


const mapstate = (state) => {
  return {
    orders: user.orders
  };
}

const mapDisptachToProps = (dispatch) => {
  return {
    changeOrderStatus (product) {dispatch(addProduct(product))}
    // : (address, token) => dispatch(checkoutCart(address, token))
  }
}

const ProductForm = reduxForm({
  form: 'product',
  validate
})(AddProduct)

export default connect(mapstate, mapDisptachToProps)(ProductForm);
