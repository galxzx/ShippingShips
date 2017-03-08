import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {logout} from 'APP/app/reducers/auth'
import {loadUserOrders} from 'APP/app/reducers/user'
import store from '../store'

export const WhoAmI = ({ user, logout }) => (
  <div className="whoami">
   	<span className="whoami-user-name"
   		  onClick={e=>{e.preventDefault();store.dispatch(loadUserOrders(user.id))}}
   	>
   		 <Link to={`users/${user.id}`}> 
			{user && user.name} 
		 </Link>
	</span>
  <br/>
   <button className="logout btn btn-primary" onClick={logout}>Logout</button>
  </div>
)



export default connect (
  ({ auth }) => ({ user: auth }),
  {logout},
) (WhoAmI)
