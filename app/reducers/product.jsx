import axios from 'axios';
/* -----------------    ACTIONS     ------------------ */


const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT';
const SELECT_PRODUCT = 'SELECT_PRODUCT';


/* ------------   ACTION CREATORS     ------------------ */

const loadProducts = products => ({ type: GET_ALL_PRODUCT, products })
const selectProducts = (product) => ({type: SELECT_PRODUCT, product})

/* ------------       REDUCER     ------------------ */

// const initState = {
// 	allProduct: [
//   {title: 'Sos Your Mom', description: 'This is a description', price: 1000, inventory: 5, categories: [{name: 'powerboat'}, {name: 'pleasureboat'}]},  {title: 'Weather Oar Knot', description: 'Here are some workds', price: 4000, inventory: 5, categories: [{name: 'powerboat'}, {name: 'pleasureboat'}]},  {title: 'Row vs Wade', description: 'Something to say', price: 0, inventory: 5, categories: [{name: 'sailboat'}, {name: 'pleasureboat'}]},  {title: 'Anchors Away', description: 'Something about a thing', price: 200000, inventory: 5, categories: [{name: 'powerboat'}, {name: 'commercial'}]},  {title: 'BobbleHead', description: 'Splish splash', price: 10000, inventory: 5, categories: [{name: 'powerboat'}, {name: 'pleasureboat'}]}],
// 	selectedProduct: {}
// };

const initState = {
	allProduct: [],
	selectedProduct: {}
}

export default const reducer = (state = initState, action) => {
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
