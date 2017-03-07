import React from 'react';

export default function User ({orders, user}) {
  
  return (
  	<div>
      <h2>User Info</h2>
      <p>Name: {user.name}</p>
      <p>Id: {user.id}</p>
    	{user.isAdmin&&(
        <p>Role: Administrator</p>
        )
      }
      <h2>Order Info</h2>
      {
      orders.map(order=>(
        <div key={order.id}>
        <h3>Order#: {order.id}</h3>
        <p>Status: {order.status}</p>
        <p>Address: {order.address}</p>
        <p>Order Total: {order.id}</p>
        <p>Date Placed/Updated: {order.updated_at}</p>
        </div>
      ))
      }
    </div>
  )
};




