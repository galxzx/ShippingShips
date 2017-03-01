import React from 'react';
//import { Link } from 'react-router';

export default function Product (props) {

  const allProducts = props.allProducts;
  console.log('prodz',allProducts)
 
  return (
    <div>
    <ul className='plainList'>
    {
      allProducts&&allProducts.map(product=>(
        <div key={product.id} className='well floatLeft margin10'>  
        <li >
          <h4 className='center'>{product.title}</h4>
          <div className='row'>
          <div className='margin3'>

          <img src={product.photoURL}  className='img-thumbnail img-responsive thumbs' />
          </div>
          <p>Price: ${product.price}</p>
          {
            product.categories.map(category=>(
              <button key={category.id} className='btn btn-xs btn-primary margin3'>{category.name}</button>
            ))
          }
          </div>
        </li>
        </div>

      ))
    }
    </ul>

    </div>
  )
};
