import React, {Component} from 'react';

//import SidebarContainer from '../containers/SidebarContainer';


export default function App ({ children }) {
  return (
    <div id="main" className="container-fluid">
      <div className="col-xs-2">
        {// <SidebarContainer />}
      }
        <p> this is some temporary sidebar content </p>
      </div>
      <div className="col-xs-10">
        { children }
      </div>

    </div>
  );
}
