import AdminOrder from '../components/AdminOrder';
import {connect} from 'react-redux'
import {changeOrderStatus} from '../reducers/user'


const mapstate = (state) => {
  return {
    order: state.user.adminOrder
  };
}

const mapDisptachToProps = (dispatch) => {
  return {
    changeOrderStatus (orderId, status) {dispatch(changeOrderStatus(orderId, status))}
    // : (address, token) => dispatch(checkoutCart(address, token))
  }
}



export default connect(mapstate, mapDisptachToProps)(AdminOrder);
