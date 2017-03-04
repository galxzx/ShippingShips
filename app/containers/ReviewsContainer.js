
import Reviews from '../components/Reviews';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.product.selectedProduct,
    showReviewForm: state.product.showReviewForm
  };
};

const ReviewsContainer = connect(mapStateToProps)(Reviews);

export default ReviewsContainer;