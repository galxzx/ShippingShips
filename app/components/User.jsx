import React from 'react';

export default function User (props) {
  let user = props.user
  console.log('prizoles',props)

  
  return (
  	<div>
    <p>Name: {user.name}</p>
    <p>Id: {user.id}</p>
  	{user.isAdmin&&(
      <p>Role: Administrator</p>
      )
    }
  </div>
  )
};
