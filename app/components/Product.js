import React, {Component} from 'react';
import ReviewsContainer from '../containers/ReviewsContainer'
import NewReviewContainer from '../containers/NewReviewContainer'
import { Link } from 'react-router';

export default class Product extends React.Component {
  constructor (props) {
    super(props)
    console.log('propolies',props)
    this.state = {[props.selectedProduct.id]:false} //this state is for conditional rendering of button and NewReviewContainer
  }

  render() {
    let props = this.props
    let user = props.user
    let product = props.selectedProduct
    let updatedReviews = props.allReviews
    let reviews = updatedReviews ? updatedReviews.filter(review=>review.product_id===product.id) : product.reviews

    console.log('rrrreeeeevvvews',reviews)

    let show = !(reviews.some(review=>review.user_id===user.id))
    
    return (
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>No. Available: {product.inventory}</p>
        <div className='row'>
          <img src={product.photoURL}/>
        </div>
        <div>
            <ReviewsContainer reviews={reviews} {...props} />
        </div>
          {
            !this.state[product.id]&&user&&show&&(
              <button 
                className='btn btn-primary' 
                onClick={ e=>this.setState({[product.id]:true}) }>Add a Review
              </button>
            )
          }
          {
            this.state[product.id]&&user&&show&&(
            <div>
              <NewReviewContainer reviews={reviews} {...props}/>
            </div>)
          }
        </div>
    ) 
  }
}

