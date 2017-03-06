import Checkout from '../components/Checkout';
import {Field, reduxForm} from 'redux-form';
import validate from '../components/checkoutValidate'




const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDisptachToProps = (dispatch) => {
  return {

  }
}

export default reduxForm({
  form: 'checkout',
  validate
})(Checkout)
