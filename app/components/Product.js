import React from 'react';
//import { Link } from 'react-router';

export default function Product (props) {


  const product = props.selectedProduct;
  console.log('prizz', product)

  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>No. Available: {product.inventory}</p>
      <div className='row'>
        <img src={product.photoURL}/>
      </div>
    </div>
  )
};

