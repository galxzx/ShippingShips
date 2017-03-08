import React from 'react';
import { Link } from 'react-router';
import Login from './Login';
import Logout from './Logout';
import WhoAmI from './WhoAmI';
import FilterInput from './FilterInput';
import { updateFilter } from '../reducers/filter';

const Header = ({category, auth, onClick, cart, handleFilterChange}) => {

 const categories = category.categories;
 const selectedCategory = category.selectedCategory

 const handleChange = (evt) => {
  console.log(evt.target.value);
 }

  return (
  <div className="container-fluid">
    <div className="row text-center">
      <h1> Shipping Ships </h1>
      <h4> How many ships could a ship shipping ship ship if a ship shipping ship could ship ships?</h4>
    </div>
    <div className="row">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav navbar-right">
            {categories.map((curCategory) => {
              return (
              <li key={curCategory}>
                  <Link to='/products' className={"category" + (curCategory === selectedCategory ? " active" : "" )} onClick={()=>{
                    onClick(curCategory)}}>{curCategory}</Link>
              </li>
              )
            })}
            <li>
              <Link to='/admin'>Admin</Link>
            </li>
            <li>
              <Link to='/cart' className="cart"><span className="glyphicon glyphicon-shopping-cart"></span>: {cart.items}</Link>
            </li>
          </ul>
          <FilterInput onHandleChange={handleFilterChange}/>
        </div>
      </nav>
    </div>
  </div>

  );
}

export default Header;
