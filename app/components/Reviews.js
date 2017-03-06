import React from 'react';
import moment from 'moment'


export default function Review ({product,reviews,review,deleteReview,setProducts}) {
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
      reviews&&reviews.map((review,idx)=>(
        <div className='well margin10'>
        <button 
          className='btn btn-xs btn-danger floatRt'
          onClick={e=>{deleteReview(e,review.id);setProducts(e)}}
        >
          Delete Review
        </button>
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



