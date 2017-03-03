
import Products from '../components/Products';
import { connect } from 'react-redux';

import {addItemToCart} from 'APP/app/reducers/cart'
import { setOneProduct } from '../reducers/product';
import {loadProductsInCat} from '../reducers/categories'


const mapStateToProps = (state) => {
  return {
    allProducts: state.product.allProducts,
  	selectedProduct: state.product.selectedProduct,
    categoryProducts: state.category.selCatProducts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectOneProduct (product) {
      dispatch(setOneProduct(product));
    },
    addItemToCart (product) {
      dispatch(addItemToCart(product))
    },
    selectCategory (category) {
      dispatch(loadProductsInCat(category))
    },
  }
}


const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products);

export default ProductsContainer;
