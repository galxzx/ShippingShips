
import User from '../components/User';
import { connect } from 'react-redux';
// import {deleteReview} from 'APP/app/reducers/review'
// import {loadProducts} from 'APP/app/reducers/product'

const mapStateToProps = (state) => {
  return {
  	user: state.auth,
    orders: state.user.orders
  };
};

const mapDispatch = dispatch => {
	return {
	}
}

const UserContainer = connect(mapStateToProps,mapDispatch)(User);

export default UserContainer;