import React from 'react';
import moment from 'moment'

export default function Review (props) {

  const product = props.selectedProduct;
  let reviews = props.reviews
  let review = props.review;
  let reviewStarsArray = []
  for(review of reviews) {
  	let starsArray = []
    	for(var i = 0; i<review.stars; i++) {
    		starsArray.push(<span key={i} className='glyphicon glyphicon-star'> </span>)
     }
     reviewStarsArray.push(starsArray)	
  }

  return (
  	<div>
  	  {
      !props.showReviewForm&&reviews&&reviews.map((review,idx)=>(
        <div className='well margin10'>
          <div >
			     <div className='row' >
			       "{review.content}"
			     </div>
			     <div className='row' >
			       {reviewStarsArray[idx].map(star=>(star))}
			     </div>
			     <div className='row' >
			       -{review.user.email || review.user.name} on <small className='date'>{moment(review.updated_at).format('LLL')}</small>
			     </div>
          </div>
        </div>
      ))
    }
  </div>
  )
};



