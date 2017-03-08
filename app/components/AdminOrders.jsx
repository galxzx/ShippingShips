import React from 'react';
import { Link } from 'react-router';
import OrderList from './OrderList'


export default function AdminOrders (props) {


  return (
    <div>
      <ul className='ordersList'>
        {props.orders.map(order => {
          return (
            <OrderList key={order.id} changeOrderStatus={props.changeOrderStatus} order={order} />
          )
        })}
      </ul>
    </div>
  )
}
