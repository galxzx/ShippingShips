import React from 'react'

export const Login = ({ login }) => (
  <form onSubmit={evt => {
    evt.preventDefault()
    login(evt.target.username.value, evt.target.password.value)
  } }>
    <input name="username" />
    <input name="password" type="password" />
    <input type="submit" value="Login" />
    <a href="/api/auth/login/google"><img className="img img-responsive" src="/public/images/btns/google/1x/btn_google_signin_dark_normal_web.png"/></a>
    <a href="/api/auth/login/facebook"><img className="img img-responsive" src="/public/images/btns/ZW4QC.png" /></a>

  </form>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login},
) (Login)
