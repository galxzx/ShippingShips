import React from 'react';
import { Link } from 'react-router';
import Login from './Login';
import Logout from './Logout';

const Sidebar = (props) => {

  const categories = props.category.categories;
  const auth = props.auth;
  var isLogin;

  if(!auth) isLogin = <Login />
  else isLogin = <Logout />

  return (
    <div>
      <img src="" className="logo" />
        {isLogin}
        <h3>Categories</h3>
      {categories.map((category) => {
        return (
        <div key={category}>
        <section>
          <h4 className="menu-item active">
            <Link to='/category' onClick={()=>{props.onClick(category)}}>{category}</Link>
          </h4>
        </section>
        </div>
        )
      })}
      <section>
        <Link to={'/cart'}> <button> Show Cart </button> </Link>
      </section>
    </div>
  );
}

export default Sidebar;
