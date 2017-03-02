import React from 'react';
//import { Link } from 'react-router';

export default function Product (props) {


  const product = props.selectedProduct;
  const addItemToCart = props.addItemToCart
  console.log('prizz', product)

  return (
    <div>
      <span><h3>{product.title}</h3> <button className = 'cart-btn center btn-primary' onClick={ () => addItemToCart(product)} >Add To Cart!</button> </span>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>No. Available: {product.inventory}</p>
      <div className='row'>
        <img src={product.photoURL}/>
      </div>
    </div>
  )
};

