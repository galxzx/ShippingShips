import React from 'react';
import { Link } from 'react-router';

export default function User (props) {
  const orders = props.orders
  const user = props.user || props.currentUser
  console.log('orders',orders)
  
  return (
  	<div>
      <h2>User Info</h2>
      <p>Name: {user.name}</p>
      <p>Id: {user.id}</p>
    	{user.isAdmin&&(
        <p>Role: Administrator</p>
        )
      }
      <h6>Order Info</h6>
      {
      orders.map(order=>(
        <div key={order.id}>
        <h3>Order ID#: {order.id}</h3>
        {
        order.orderItems.map((item,idx)=>(
          <div key ={item.id} className='margin10' >
          <Link to={'/product/'+item.product.id}  ><strong className='red'>{item.product.title+" "}</strong></Link>
          <strong>${item.product.price}</strong>
          </div>
        ))
        }
        <div className='margin10'>
        <p>Status: {order.status}</p>
        <p>Address: {order.address}</p>
        <p>Order Total: {order.id}</p>
        <p>Date Placed/Updated: {order.updated_at}</p>
        </div>
        </div>
      ))
      }
    </div>
  )
};




