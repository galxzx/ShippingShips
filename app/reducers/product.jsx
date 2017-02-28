import axios from 'axios';
/* -----------------    ACTIONS     ------------------ */


const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
const SELECT_PRODUCT = 'SELECT_PRODUCT';


/* ------------   ACTION CREATORS     ------------------ */

const setProducts = products => ({ type: GET_ALL_PRODUCTS, products })
const setOneProduct = (product) => ({type: SELECT_PRODUCT, product})


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

//Dispatching functions will hit appropriate backend routes to fetch appropriate data

export const loadProducts = () => dispatch => {
	axios.get('/api/products')
	.then( res => {
		dispatch(setProducts(res.data))
	})
	.catch( err => console.error(err))
}

export const loadProductById = (id) => dispatch => {
	axios.get('/api/products/'+id)
	.then( res => {
		dispatch(setOneProduct(res.data))
	})
	.catch( err => console.error(err))
}


export default reducer;
