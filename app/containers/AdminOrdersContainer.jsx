import AdminOrders from '../components/AdminOrders';
import {connect} from 'react-redux'
import {changeOrderStatus} from '../reducers/user'


const mapstate = (state) => {
  return {
    orders: state.user.orders
  };
}

const mapDisptachToProps = (dispatch) => {
  return {
    changeOrderStatus (orderId, status) {dispatch(changeOrderStatus(orderId, status))}
    // : (address, token) => dispatch(checkoutCart(address, token))
  }
}



export default connect(mapstate, mapDisptachToProps)(AdminOrders);
