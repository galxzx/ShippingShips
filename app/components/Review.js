import React from 'react';
//import { Link } from 'react-router';

export default function Review (props) {



  const review = props.selectedProduct.review;
  console.log('prizz', product)
 
  return (
    <div>
      <h3>{review.stars}</h3>
      <p>{review.content}</p>
    </div>
  )
};