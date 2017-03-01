import React from 'react';

export default function Cart (props){
	const cart = props.cart;
	const total = props.total || 0;

	return (
			<div>
				<ol>
					{
						cart && cart.map( item => {
							return (
								<li key = {item.id}>
									<h3>{item.title}</h3>
									<p>{item.description}</p>
									<p>Price: ${item.price}</p>
								</li>
							);
						})
					}
				</ol>
				<h3> Total: {total}</h3>

	        </div>
	        );
}
