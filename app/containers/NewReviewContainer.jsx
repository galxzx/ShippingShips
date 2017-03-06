import NewReview from '../components/NewReview';
import { connect } from 'react-redux';
import {addReview} from 'APP/app/reducers/review'
import React from 'react';
import {loadProducts} from 'APP/app/reducers/product'

const mapState = (state) => {
  return {
    selectedProduct: state.product.selectedProduct,
    user: state.auth
  };
};

const mapDispatch = dispatch => {
	return {
		addReview(review) {
			dispatch(addReview(review))
			dispatch(loadProducts())
		}
	}
}




class NewReviewContainer extends React.Component {
	constructor(props) {
	    super(props)
		this.state={
			reviewContent: '',
			reviewStars: 1
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		e.preventDefault()
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit (e,selectedProduct) {
		e.preventDefault()
		this.props.addReview(Object.assign({},this.state,{productId:this.props.selectedProduct.id, user:this.props.user}))
		this.setState({
			reviewContent: '',
			reviewStars: 1
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














