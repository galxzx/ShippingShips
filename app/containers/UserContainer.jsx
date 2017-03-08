
import User from '../components/User';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
  	user: state.auth,
    orders: state.user.orders,
    currentUser: state.user.currentUser
  };
};

const mapDispatch = dispatch => {
	return {
	}
}

const UserContainer = connect(mapStateToProps,mapDispatch)(User);

export default UserContainer;