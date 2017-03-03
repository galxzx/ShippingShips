import React from 'react'

export const Logout = ({ logout }) => (
  <button onClick={logout}> Logout </button>
)

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {logout},
) (Logout)
