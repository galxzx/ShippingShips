import React from 'react';
import { Link } from 'react-router';
import Login from './Login';
import Logout from './Logout';
import WhoAmI from './WhoAmI';

const Header = ({category, auth, onClick}) => {

//  const categories = category.categories;
 // const selectedCategory = category.selectedCategory

  return (
  <div className="container-fluid">
    <div className="row text-center">
      <h1> Shipping Ships </h1>
      <h4> How many ships could a ship shipping ship ship if a ship shipping ship could ship ships?</h4>
    </div>
    <div className="row">
    <div className="navbar navbar-default">
      <ul className="nav navbar-nav">
        {/*{categories.map((curCategory) => {
          return (
          <li key={curCategory}>
              <Link to='/products' className={"category" + (curCategory === selectedCategory ? " selCat" : "" )} onClick={()=>{
                onClick(curCategory)}}>{curCategory}</ Link>
          </li>
          )
        })}
      */}
        <li> Something</li>
      </ul>
    </div>
    </div>
  </div>

  );
}

export default Header;
