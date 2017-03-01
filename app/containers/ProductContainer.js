
import Product from '../components/Product';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.product.selectedProduct
  };
};

const ProductContainer = connect(mapStateToProps)(Product);

export default ProductContainer;