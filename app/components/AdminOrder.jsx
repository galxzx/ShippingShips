import React from 'react';
import { Link } from 'react-router';
import OrderList from './OrderList'


export default function AdminOrder (props) {

   console.log(props.order)

  return (

    <div className="well">
      <OrderList changeOrderStatus={props.changeOrderStatus} order={props.order} />
      <ul>
        {
          props.order.orderItems.map(item => {
            return (
              <li key={item.id}>
              <Link to={`/product/${item.product_id}`}>{item.product.title}</Link><br/> Price: {item.price}<br/> Quantity: {item.quantity}
              </li>
            )
          })
        }
      </ul>

    </div>
  )
}
