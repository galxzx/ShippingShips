import React from 'react'

export const Logout = ({ logout, auth}) =>(
  <div>
    <h6>Logged in as {auth.name} </h6>
    <button onClick={logout}> Logout </button>
  </div>
)


import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({auth: state.auth}),
  {logout},
) (Logout)

