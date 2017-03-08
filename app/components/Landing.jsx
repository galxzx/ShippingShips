import React, {Component} from 'react';
import { Link } from 'react-router';



export default function Landing ({ children, user }) {



  return (
    <div id="main" className="container-fluid wrap">
        <Link to="/admin/addProduct">Add product</Link>
        <Link to="/admin/orders">View Orders </Link>
        <div >
          { user && user.isAdmin ? children : 'You are not allowed'}
        </div>

    </div>
  );
}
