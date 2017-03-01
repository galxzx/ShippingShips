
import Products from '../components/Products';
import { connect } from 'react-redux';

import {addItemToCart} from 'APP/app/reducers/cart'
import { setOneProduct } from '../reducers/product';


const mapStateToProps = (state) => {
  return {
  	allProducts: state.product.allProducts,
	selectedProduct: state.product.selectedProduct
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectOneProduct (product) {
      dispatch(setOneProduct(product));
    },
    addItemToCart
  }
}


const ProductsContainer = connect(mapStateToProps,mapDispatchToProps)(Products);






export default ProductsContainer;
