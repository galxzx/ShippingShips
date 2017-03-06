import React from 'react';
import { Link } from 'react-router';
import Login from './Login';
import Logout from './Logout';
import WhoAmI from './WhoAmI';

const Sidebar = ({category, auth, onClick, cart}) => {

  const categories = category.categories;
  const selectedCategory = category.selectedCategory
  var isLogin;
  const items = cart.cart;


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
        <Link to={'/cart'}> <button className="btn-block btn btn-primary"> Show Cart </button> </Link>
      </section>
      <section>
        <h4>Your Items</h4>
        {items.map(item => {
          return (
            <p key={item.info.id}>{item.info.title.slice(0,10)}  <strong>QTY</strong>:{item.quantity}</p>
          )
        })}
        <h5>Total: ${cart.total}</h5>
      </section>
    </div>

  );
}

export default Sidebar;
