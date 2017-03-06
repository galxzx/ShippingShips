
import Product from '../components/Product';
import { connect } from 'react-redux';
import {addItemToCart} from 'APP/app/reducers/cart'

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.product.selectedProduct,
    updatedReviews: state.review.updatedReviews,
    user: state.auth,
    allReviews: state.product.allProducts.map(prod=>prod.reviews).reduce((a,b)=>a.concat(b),[])
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
