import React from 'react'
import { Link } from 'react-router'

export const Login = ({ login }) => (
  <div>
    <h6>Already Registered?</h6>
    <form onSubmit={evt => {
      evt.preventDefault()
      login(evt.target.username.value, evt.target.password.value)
    } }>
      <input name="username" placeholder="email" />
      <input name="password" type="password" placeholder="password"/>
      <input type="submit" value="Login" className="btn btn-primary btn-small btn-block form-control login" />
      <a href="/api/auth/login/google"><img className="img img-responsive login" src="/public/images/btns/google/1x/btn_google_signin_dark_normal_web.png"/></a>
      <a href="/api/auth/login/facebook"><img className="img img-responsive login" src="/public/images/btns/ZW4QC.png" /></a>

    </form>
    <h6>Create a new Account!</h6>
    <Link to="/signup"><button className="btn btn-primary btn-block form-control">Sign Up</button></Link>
  </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login},
) (Login)
