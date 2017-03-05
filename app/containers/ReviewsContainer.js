
import Reviews from '../components/Reviews';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.product.selectedProduct,
    showReviewForm: state.product.showReviewForm,
    newestReview: state.review.newestReview,
    allReviews: state.review.allReviews,
    user: state.auth

  };
};

const ReviewsContainer = connect(mapStateToProps)(Reviews);

export default ReviewsContainer;