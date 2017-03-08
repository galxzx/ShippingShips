import axios from 'axios';
/* -----------------    ACTIONS     ------------------ */
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
const SELECT_PRODUCT = 'SELECT_PRODUCT';
/* ------------   ACTION CREATORS     ------------------ */
export const setProducts = products => ({ type: GET_ALL_PRODUCTS, products })
export const setOneProduct = (product) => ({type: SELECT_PRODUCT, product})
/* ------------       REDUCER     ------------------ */

const initState = {
	allProducts: [],
	selectedProduct: {}
}

export const reducer = (state = initState, action) => {
	const newState = Object.assign({}, state)
	switch (action.type){

		case GET_ALL_PRODUCTS:
			newState.allProducts = action.products
			break;

		case SELECT_PRODUCT:
			newState.selectedProduct = action.product
			break;

		default:
			return state;
	}
	return newState;
}
/* ------------       DISPATCHERS     ------------------ */
export const loadProducts = () => dispatch => {
	axios.get('/api/products')
	.then( res => {
		dispatch(setProducts(res.data))
	})
	.catch( err => console.error(err))
}

export const loadProduct = (id) => dispatch => {
	axios.get('/api/products/'+id)
 	.then(product=> {
    	dispatch(setOneProduct(product.data))
  	})
  	.catch(e=>console.e)
}

export default reducer;
