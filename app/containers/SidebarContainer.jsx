
import Sidebar from '../components/Sidebar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    category: state.category
  };
};

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;
