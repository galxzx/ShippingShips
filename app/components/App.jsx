import React, {Component} from 'react';
import { Link } from 'react-router';
import SidebarContainer from '../containers/SidebarContainer';
import Login from '../components/Login'

export default function App ({ children }) {
  return (
    <div id="main" className="container-fluid">
    <Login />

      <div className="col-xs-2">
        <SidebarContainer />
      </div>
      <div className="col-xs-10">
        <Link to={'/cart'}> <button>Show Cart </button> </Link>
        { children }
      </div>

    </div>
  );
}
