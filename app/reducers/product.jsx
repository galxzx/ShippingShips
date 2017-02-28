import axios from 'axios';
/* -----------------    ACTIONS     ------------------ */


const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
const SELECT_PRODUCT = 'SELECT_PRODUCT';


/* ------------   ACTION CREATORS     ------------------ */

const setProducts = products => ({ type: GET_ALL_PRODUCT, products })
const setOneProduct = (product) => ({type: SELECT_PRODUCT, product})


/* ------------       REDUCER     ------------------ */

// const initState = {
// 	allProduct: [
//   {title: 'Sos Your Mom', description: 'This is a description', price: 1000, inventory: 5, categories: [{name: 'powerboat'}, {name: 'pleasureboat'}]},  {title: 'Weather Oar Knot', description: 'Here are some workds', price: 4000, inventory: 5, categories: [{name: 'powerboat'}, {name: 'pleasureboat'}]},  {title: 'Row vs Wade', description: 'Something to say', price: 0, inventory: 5, categories: [{name: 'sailboat'}, {name: 'pleasureboat'}]},  {title: 'Anchors Away', description: 'Something about a thing', price: 200000, inventory: 5, categories: [{name: 'powerboat'}, {name: 'commercial'}]},  {title: 'BobbleHead', description: 'Splish splash', price: 10000, inventory: 5, categories: [{name: 'powerboat'}, {name: 'pleasureboat'}]}],
// 	selectedProduct: {}
// };

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
