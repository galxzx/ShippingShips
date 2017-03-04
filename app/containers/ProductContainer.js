
import Product from '../components/Product';
import { connect } from 'react-redux';
import {addItemToCart} from 'APP/app/reducers/cart'
import {showReviewForm} from 'APP/app/reducers/product'

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.product.selectedProduct,
    showReviewForm: state.product.showReviewForm
  };
};

const mapDispatch = dispatch => {
	return {
		addItemToCart (product) {
			dispatch(addItemToCart(product));
		},
		showRevFormFunc (bool) {
			dispatch(showReviewForm(bool))

		}
	}
}

const ProductContainer = connect(mapStateToProps, mapDispatch)(Product);

export default ProductContainer;
