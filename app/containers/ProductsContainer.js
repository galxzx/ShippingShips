import React from 'react';

import Product from '../components/roduct'
import store from '../store'

export default class ProductsContainer extends React.Component {

	constructor(){
		super()
		this.state = {
			titleQuery: ''
		}
	}

	handleTitleQueryChange (evt) {
		this.setState({
			titleQuery: evt.target.value
		})
	}

	render() {
		return (
			store.product.allProduct.forEach( product => {
				if (product.name.match(this.state.titleQuery)){
					return <Product /> //Fix this when Product component is complete
				}
			})
		)
	}

}
