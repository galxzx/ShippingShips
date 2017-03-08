import React from 'react';
import { Link } from 'react-router'

export default function Cart (props){

	const cart = props.cart;
	const total = props.total || 0;
	const removeItem = props.removeItemFromCart;
	const increment = props.increment;
	const decrement = props.decrement;
	return (
			<div>
				<h2> This is your cart! </h2>
				<div>
					{
						cart && cart.map( entry => {

							let item = entry.info

							return (
							    <div key = {item.id} className='container-fluid cart-item'>
							    	<div className= "col-xs-6 unstyled">

										<h3>Title: {item.title}</h3>
										<p>Quantity: <button onClick={() => decrement(item)}>-  </button> {entry.quantity} <button onClick={ () => increment(item)}>+</button></p>
										<p>Description: {item.description}</p>
										<p>Price: ${item.price}</p>
										<button className = "cart-btn btn-danger" onClick={ () => removeItem(item)}>Remove from Cart</button>
									</div>
									<div className='col-xs-6'>
								    	<img src={item.photoURL} className='img-responsive'/>
								    </div>
							    </div>

							);
						})
					}
				</div>
				<h3> Total: ${total}</h3>
				<Link to="/checkout"><button className="btn btn-primary checkout">Checkout</button></Link>

	        </div>
	        );
}
