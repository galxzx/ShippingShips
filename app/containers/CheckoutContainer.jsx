import Checkout from '../components/Checkout';
import {Field, reduxForm} from 'redux-form';
import validate from '../components/checkoutValidate'
import {checkoutCart} from '../reducers/cart'
import {connect} from 'react-redux'




const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDisptachToProps = (dispatch) => {
  return {
    checkoutCart (address, token) {dispatch(checkoutCart(address, token))}
    // : (address, token) => dispatch(checkoutCart(address, token))
  }
}

const cartForm = reduxForm({
  form: 'checkout',
  validate
})(Checkout)

export default connect(mapStateToProps, mapDisptachToProps)(cartForm);
