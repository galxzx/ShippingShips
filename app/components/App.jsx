import React, {Component} from 'react';
import { Link } from 'react-router';
import SidebarContainer from '../containers/SidebarContainer';
import HeaderContainer from '../containers/HeaderContainer'


export default function App ({ children }) {
  return (
    <div id="main" className="container-fluid wrap">
      <div className="row">
        <HeaderContainer />
      </div>
      <div className="row">
        <div id="sidebar" className="col-xs-2">
          <SidebarContainer />
        </div>
        <div className="col-xs-10">
          { children }
        </div>
      </div>
    </div>
  );
}
