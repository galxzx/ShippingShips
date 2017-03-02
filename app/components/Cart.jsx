import React from 'react';

export default function Cart (props){
	console.log("Cart props!: ", props);
	const cart = props.cart;
	const total = props.total || 0;
	const removeItem = props.removeItemFromCart;
	console.log(removeItem)




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
										<button onClick={ () => removeItem(item)}>Remove from Cart</button>
										<h3>Title: {item.title}</h3>
										<p>Quantity: {entry.quantity}</p>
										<p>Description: {item.description}</p>
										<p>Price: ${item.price}</p>
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

	        </div>
	        );
}
