import React from 'react';
//import { Link } from 'react-router';

export default function Product (props) {

  const allProducts = props.allProducts;
 
  return (
    <div>
    <ul>

    {
   
      allProducts&&allProducts.map(product=>(   
        <li key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>No. Available: {product.inventory}</p>
          <div className='row'>
            <img src={product.photoUrl}/>
          </div>
        </li>

      ))
     


    }
    </ul>

    </div>
  )
};
