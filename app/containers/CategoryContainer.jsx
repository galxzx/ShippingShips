import Category from '../components/Category';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    categoryProducts: state.category.selCatProducts
  };
};

const mapDisptachToProps = (dispatch) => {
  return {
    onClickCat: (category) => {
      dispatch(loadProductsInCat(category))
    }
  }
}
const CategoryContainer = connect(mapStateToProps, mapDisptachToProps)(Category);

export default CategoryContainer;
