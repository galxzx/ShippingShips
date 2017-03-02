import React from 'react';
import { Link } from 'react-router';


export default function Product (props) {

  const allProducts = props.allProducts;
  const selectOneProduct = props.selectOneProduct;
  const addItemToCart = props.addItemToCart;

  const handleClick= (evt, product) => {

    if ($(evt.target).hasClass('cart-btn')) {
      evt.preventDefault()
      console.log(addItemToCart);
      addItemToCart(product)
    }
    else {
      console.log(selectOneProduct)
      selectOneProduct(product);
    }
  }

  return (
    <div>
    <ul className='plainList'>
    {
      allProducts&&allProducts.map(product=>(

        <Link to={'/product'} onClick={e=> handleClick(e, product)} >
        <div key={product.id} className='well margin10' >
        <li >
          <button className = 'cart-btn center btn-primary' >Add To Cart!</button>
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
        </Link>

      ))
    }
    </ul>

    </div>
  )
};
