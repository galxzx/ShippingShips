import React, {Component} from 'react';



export default function OrderLanding ({ order }) {

  return (
    <div className="well">
    {`Order Id: ${order.id}`} <br/> {`Order Total: ${order.total}`}<br/>{ `Order Status: ${order.status}`}
    </div>
  );
}
