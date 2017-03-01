import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';

/* ------------   ACTION CREATORS     ------------------ */

export const addItem = item => ({ type: ADD_ITEM_TO_CART, item});
export const removeItem = item => ({type: REMOVE_ITEM_FROM_CART, item})

/* ------------       REDUCER     ------------------ */

const initState = {
	cart: [],
	total: 0
}

const reducer = (state = initState, action) => {
	const newState = Object.assign({}, state);
	switch(action.type){
		case ADD_ITEM_TO_CART:
			newState.cart = [...newState.cart, action.item]
			break;

		case REMOVE_ITEM_FROM_CART:
			let itemIndex = newState.cart.indexOf(action.item);
			if(itemIndex)
				newState.cart.splice( newState.cart.indexOf(action.item), 1);
			break;

		default:
			return state
	}
	return newState;
}

/* ------------       DISPATCHERS     ------------------ */
export const addItemToCart = (item) => dispatch => {
	console.log("WOO ABOUT TO DISPATCH")
	dispatch(addItem(item))
}

export default reducer;
