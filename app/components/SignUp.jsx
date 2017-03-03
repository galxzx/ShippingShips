import React from 'react';

export  function Signup ({signup}){


  return (
    <well>
     <form onSubmit={evt => {
    evt.preventDefault()
    signup(evt.target.username.value, evt.target.email.value, evt.target.password.value)
  } }>
    <input name="username" placeholder="username"/>
    <input name="email" placeholder="email" />
    <input name="password" type="password" placeholder="password"/>
    <input type="submit" value="Login" />
    <a href="/api/auth/login/google"><img className="img img-responsive" src="/public/images/btns/google/1x/btn_google_signin_dark_normal_web.png"/></a>
    <a href="/api/auth/login/facebook"><img className="img img-responsive" src="/public/images/btns/ZW4QC.png" /></a>

  </form>
  </well>
    );
}

import {signup} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {signup},
) (Signup)
