import React, {Component} from 'react';
import ReviewsContainer from '../containers/ReviewsContainer'
import NewReviewContainer from '../containers/NewReviewContainer'
import { Link } from 'react-router';

export default class Product extends React.Component {

  constructor (props) {
    super(props)
    this.state = {showForm:false}
    
  }



  render() {
    let props = this.props
    const product = props.selectedProduct;
    let reviews = product.reviews
    console.log('productProps',props)
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
          !this.state.showForm&&(<button className='btn btn-primary' onClick={e=>this.setState({showForm:true})}>Add a Review</button>)
        }
        
        {this.state.showForm&&(
          <div>
            <NewReviewContainer reviews={reviews} {...props}/>
          </div>
        )}
      </div>
  )
}

 
};

