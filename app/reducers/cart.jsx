import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
const CALCULATE_TOTAL = 'CALCULATE_TOTAL'

/* ------------   ACTION CREATORS     ------------------ */

export const addItem = item => ({ type: ADD_ITEM_TO_CART, item});
export const removeItem = item => ({type: REMOVE_ITEM_FROM_CART, item})
export const calculateTotal = () => ( { type: CALCULATE_TOTAL})
/* ------------       REDUCER     ------------------ */

const initState = {
	cart: [],
	total: 0
}

const reducer = (state = initState, action) => {
	const newState = Object.assign({}, state);
	switch(action.type){
		case ADD_ITEM_TO_CART:
			let isDuplicate = false;
			newState.cart.forEach( entry => {
				if(entry.info == action.item){
					entry.quantity++;
					isDuplicate = true;
				}
			})
			if(!isDuplicate){
				newState.cart = [...newState.cart, {
					info: action.item,
					quantity: 1
				}]
			}
			break;

		case REMOVE_ITEM_FROM_CART:
			let itemIndex = -1;
			newState.cart.forEach( (entry, idx) => {
				if(entry.info == action.item)
					itemIndex = idx;
			})
			console.log("I found this item on the cart redux array at index:", itemIndex)
			if(itemIndex >= 0){
				console.log("i like splicing an imma cut ya");
				newState.cart.splice( itemIndex, 1);
			}
			break;

		case CALCULATE_TOTAL:
			let newTotal = 0;
			newState.cart.forEach( item => {
				newTotal += item.info.price * item.quantity
			});
			newState.total = newTotal;
			break;

		default:
			return state
	}
	return newState;
}

/* ------------       DISPATCHERS     ------------------ */
export const addItemToCart = (item) => dispatch => {
	dispatch(addItem(item));
	dispatch(calculateTotal());
}

export const removeItemFromCart = (item) => dispatch => {
	dispatch(removeItem(item));
	dispatch(calculateTotal());
}

export default reducer;
