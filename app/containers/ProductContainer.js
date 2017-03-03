
import Product from '../components/Product';
import { connect } from 'react-redux';
import {addItemToCart} from 'APP/app/reducers/cart'

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.product.selectedProduct
  };
};

const mapDispatch = dispatch => {
	return {
		addItemToCart (product) {
			dispatch(addItemToCart(product));
		}
	}
}

const ProductContainer = connect(mapStateToProps, mapDispatch)(Product);

export default ProductContainer;
