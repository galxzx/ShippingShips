import React from 'react';

export default function Cart ({cart, total}){


	return (
	        <div>
	        	<ul>
	        		{
	        			cart&&cart.map( item => {
	        				<li key = {item.id}>
	        					<h3>{item.title}</h3>
					            <p>{item.description}</p>
					            <p>Price: ${item.price}</p>
	        				</li>
	        			})
	        		}
	        	</ul>

	        </div>
	        );
}
