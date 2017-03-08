import OrderLanding from '../components/OrderLanding';
import {connect} from 'react-redux'



const mapstate = (state) => {
  return {
    order: state.user.currentOrder
  };
}





export default connect(mapstate)(OrderLanding);
