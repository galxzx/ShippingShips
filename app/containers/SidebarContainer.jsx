
import Sidebar from '../components/Sidebar';
import { connect } from 'react-redux';
import {loadProductsInCat} from '../reducers/categories'

const mapStateToProps = (state) => {
  return {
    category: state.category
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (category) => {
      dispatch(loadProductsInCat(category))
    }
  }
}
const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
