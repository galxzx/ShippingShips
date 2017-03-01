import Cart from '../components/Cart';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		cart: state.cart.cart,
		total: state.cart.total
	}
}

const CartContainer = connect(mapStateToProps)(Cart);

export default CartContainer
