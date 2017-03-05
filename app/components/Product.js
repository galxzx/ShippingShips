import React, {Component} from 'react';
import ReviewsContainer from '../containers/ReviewsContainer'
import NewReviewContainer from '../containers/NewReviewContainer'
import { Link } from 'react-router';

export default class Product extends React.Component {
  constructor (props) {
    super(props)
    this.state = {[props.selectedProduct.id]:false}
  }

  render() {
    let props = this.props
    let user = props.user
    console.log('props',props)
    let product = props.selectedProduct
    let newReview = props.allReviews[product.id] || null
    let newId = newReview ? newReview[0].id : null
    let initialReviews = product.reviews.filter(rev=>{
      if(newReview){ return rev.id!=newReview[0].id}
      else {return true}
    })
    let reviews = newReview ? initialReviews.concat(newReview) : initialReviews
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
          !this.state[props.selectedProduct.id]&&!newReview&&user&&(
            <button 
              className='btn btn-primary' 
              onClick={ e=>this.setState({[props.selectedProduct.id]:true}) }>Add a Review
            </button>
          )
        }
        
        {
          this.state[props.selectedProduct.id]&&!newReview&&user&&(
          <div>
            <NewReviewContainer reviews={reviews} {...props}/>
          </div>)
        }
      
      </div>
  )
}

 
};

