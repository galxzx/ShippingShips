import Category from '../components/Category';
import { connect } from 'react-redux';
import { addItemToCart } from 'APP/app/reducers/cart'

const mapStateToProps = (state) => {
  return {
    categoryProducts: state.category.selCatProducts
  };
};

const mapDisptachToProps = (dispatch) => {
  return {
    onClickCat: (category) => {
      dispatch(loadProductsInCat(category))
    },
    addItemToCart: (item) => {
    	dispatch(addItemToCart(item))
    }
  }
}
const CategoryContainer = connect(mapStateToProps, mapDisptachToProps)(Category);

export default CategoryContainer;
