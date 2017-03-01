import React from 'react';
import { Link } from 'react-router';
import Products from './Products'

export default function Category (props) {
  console.log('category Props ======> ', props)
  return (
    <div>
      <Products allProducts={props.categoryProducts} onClickCat={props.onClickCat} />
    </div>
  )
}
