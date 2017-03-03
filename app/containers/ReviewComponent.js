
import Review from '../components/Review';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.product.selectedProduct
  };
};

const ReviewContainer = connect(mapStateToProps)(Review);

export default ReviewContainer;