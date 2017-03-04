import NewReview from '../components/NewReview';
import { connect } from 'react-redux';
// import {addItemToCart} from 'APP/app/reducers/cart'
// import {showReviewForm} from 'APP/app/reducers/product'

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.product.selectedProduct,
    showReviewForm: state.product.showReviewForm
  };
};

const mapDispatch = dispatch => {
	return {
		handleSubmit (e) {
			e.preventDefault()
			console.log('yo')
			//dispatch(addItemToCart(product));
		},
		handleChange(e) {
			e.preventDefault()
			this.setState({[e.target.name]: e.target.value})
			console.log(e.target.value)
		}

		}
	}



const NewReviewContainer = connect(mapStateToProps,mapDispatch)(NewReview);

export default NewReviewContainer;