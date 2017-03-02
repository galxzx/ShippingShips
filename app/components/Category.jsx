import React from 'react';
import { Link } from 'react-router';
import ProductsContainer from '../containers/ProductsContainer'

export default function Category (props) {
  console.log('category Props ======> ', props)
  return (
    <div>
      <ProductsContainer allProducts={props.categoryProducts} onClickCat={props.onClickCat} />
    </div>
  )
}
