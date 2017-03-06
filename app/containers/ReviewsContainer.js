
import Reviews from '../components/Reviews';
import { connect } from 'react-redux';
import {deleteReview} from 'APP/app/reducers/review'
import {loadProducts} from 'APP/app/reducers/product'

const mapStateToProps = (state) => {
  return {
    product: state.product.selectedProduct,
    newReview: state.review.newReview,
    user: state.auth
  };
};

const mapDispatch = dispatch => {
	return {
		deleteReview (e,reviewId) {
			e.preventDefault()
			dispatch(deleteReview(reviewId));
		},
		setProducts(e) {
			e.preventDefault()
			dispatch(loadProducts())
		}
	}
}

const ReviewsContainer = connect(mapStateToProps,mapDispatch)(Reviews);

export default ReviewsContainer;