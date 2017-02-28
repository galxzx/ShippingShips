import axios from 'axios';
/* -----------------    ACTIONS     ------------------ */


const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
const SELECT_PRODUCT = 'SELECT_PRODUCT';


/* ------------   ACTION CREATORS     ------------------ */

const setProducts = products => ({ type: GET_ALL_PRODUCT, products })
const selectProducts = (product) => ({type: SELECT_PRODUCT, product})

/* ------------       REDUCER     ------------------ */


const initState = {
	allProducts: [],
	selectedProduct: {}
}

export const reducer = (state = initState, action) => {
	const newState = Object.assign({}, state)
	switch (action.type){

		case GET_ALL_PRODUCT:
			newState.allProduct = action.products
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
		dispatch(loadProducts(res.data))
	})
	.catch( err => console.error(err))
}


export default reducer;
