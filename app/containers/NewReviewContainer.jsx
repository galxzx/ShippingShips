import NewReview from '../components/NewReview';
import { connect } from 'react-redux';
import {addReview} from 'APP/app/reducers/review'
import React from 'react';

const mapState = (state) => {
  return {
    selectedProduct: state.product.selectedProduct,
    showReviewForm: state.product.showReviewForm,
    user: state.auth,
    allReviews: state.review.allReviews
  };
};

const mapDispatch = dispatch => {
	return {
		addReview(review) {
			dispatch(addReview(review))
		}	
	}
}

class NewReviewContainer extends React.Component {
	constructor(props) {
    super(props)
	this.state={
		reviewContent: '',
		reviewStars: 1,
		dirty: false
	}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)

	}

	handleChange(e) {
		e.preventDefault()
		this.setState({
			[e.target.name]: e.target.value, 
			dirty: true
		})
	}

	handleSubmit (e,selectedProduct) {
		e.preventDefault()
		this.props.addReview(Object.assign({},this.state,{productId:this.props.selectedProduct.id, user:this.props.user}))
		this.setState({
			reviewContent: '',
			reviewStars: 1,
			dirty: false
		})
		
	}

	render () {
		const reviewContent = this.state.reviewContent
		const reviewStars = this.state.reviewStars
		return (
			<NewReview
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit}
				reviewContent={reviewContent}
				reviewStars={reviewStars}
				user={this.props.user}
			/>
		)
	}
}

export default connect(
	mapState,
	mapDispatch
)(NewReviewContainer)














