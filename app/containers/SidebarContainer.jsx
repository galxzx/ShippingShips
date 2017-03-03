
import Sidebar from '../components/Sidebar';
import { connect } from 'react-redux';
import {loadProductsInCat} from '../reducers/categories'
import { setOneProduct } from '../reducers/product';

const mapStateToProps = (state) => {
  return {
    category: state.category,
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick (category) {
      dispatch(loadProductsInCat(category))
    },

    selectOneProduct (product) {
      dispatch(setOneProduct(product))
  	}
  }
 }
const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
