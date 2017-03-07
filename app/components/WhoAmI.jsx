import React from 'react'
import {Link} from 'react-router'

export const WhoAmI = ({ user, logout }) => (
  <div className="whoami">
   <Link to={`users/${user.id}`}> <span className="whoami-user-name">{user && user.name}</span></Link><br/>
    <button className="logout btn btn-primary" onClick={logout}>Logout</button>
  </div>
)

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  ({ auth }) => ({ user: auth }),
  {logout},
) (WhoAmI)
