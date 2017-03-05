import React from 'react';
import { Link } from 'react-router';
import Login from './Login';
import Logout from './Logout';
import WhoAmI from './WhoAmI';

const Sidebar = ({category, auth, onClick}) => {

  const categories = category.categories;
  const selectedCategory = category.selectedCategory
  var isLogin;

  if(!auth) isLogin = <Login />
 //else isLogin = <Logout />
  else isLogin = <WhoAmI />
  return (
    <div>

        {isLogin}
        <div >
        <section>
        <h3>Categories</h3>
      {categories.map((curCategory) => {
        return (

          <h4 key={curCategory}className="menu-item active">
            <Link to='/products' className={"category" + (curCategory === selectedCategory ? " selCat" : "" )} onClick={()=>{
              onClick(curCategory)}}>{curCategory}</ Link>
          </h4>

        )
      })}
      </section>
    </div>
      <section>
        <Link to={'/cart'}> <button className="btn-block"> Show Cart </button> </Link>
      </section>
    </div>
  );
}

export default Sidebar;
