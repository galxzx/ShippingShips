import axios from 'axios';
import localForage from 'localforage';
import { setCurrentOrder } from './user';
import {browserHistory} from 'react-router';


/* -----------------    ACTIONS     ------------------ */

const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
const CALCULATE_TOTAL = 'CALCULATE_TOTAL';
const STORE_CART_LOCAL = 'STORE_CART_LOCAL';
const SET_FROM_LOCAL = 'SET_FROM_LOCAL';
const INCREMENT_QUANT = 'INCREMENT_QUANT';
const DECREMENT_QUANT = 'DECREMENT_QUANT';
const SET_MESSAGE = 'SET_MESSAGE';

/* ------------   ACTION CREATORS     ------------------ */

export const addItem = item => ({ type: ADD_ITEM_TO_CART, item});
export const removeItem = item => ({type: REMOVE_ITEM_FROM_CART, item});
export const calculateTotal = () => ( { type: CALCULATE_TOTAL});
export const storeLocal = () => ( { type: STORE_CART_LOCAL});
export const setFromLocal = (cart) => ({ type: SET_FROM_LOCAL, cart});
export const incrementQuant = (item) => ({type: INCREMENT_QUANT, item});
export const decrementQuant = (item) => ({type: DECREMENT_QUANT, item});
export const setMessage = (message) => ({type: SET_MESSAGE, message});

/* ------------       REDUCER     ------------------ */

const initState = {
	cart: [],
	total: 0,
	items: 0,
	message: ""
}

const localState = localForage.setItem('cart', []);

const reducer = (state = initState, action) => {
	const newState = Object.assign({}, state);
	let itemIndex = -1;
	if(action.item){
		newState.cart.forEach( (entry, idx) => {
			if(entry.info.id == action.item.id){
				itemIndex = idx;
			}
		})
	}


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
			if(itemIndex >= 0){
				newState.cart.splice( itemIndex, 1);
			}
			break;

		case CALCULATE_TOTAL:
			let newTotal = 0;
			let numItems = 0;
			newState.cart.forEach( item => {
				newTotal += item.info.price * item.quantity
				numItems += item.quantity
			});
			newState.total = newTotal;
			newState.items = numItems;
			break;

		case STORE_CART_LOCAL:
			localForage.setItem('cart', newState.cart).then( () => {
				localForage.getItem('cart').then( savedCart => {
				})
			});
			break;

		case SET_FROM_LOCAL:
			newState.cart = action.cart
			break;

		case INCREMENT_QUANT:
			console.log(newState.cart, itemIndex)
			newState.cart[itemIndex].quantity++;
			if(itemIndex < 0){
				console.error("Item not found on cart state");
			}
			break;

		case DECREMENT_QUANT:
			if (newState.cart[itemIndex] && newState.cart[itemIndex].quantity > 1){
				newState.cart[itemIndex].quantity--;
			}
			break;

		case SET_MESSAGE:
			newState.message = action.message;
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
	dispatch(storeLocal());
}

export const removeItemFromCart = (item) => dispatch => {
	dispatch(removeItem(item));
	dispatch(calculateTotal());
	dispatch(storeLocal());
}

export const loadCartFromLocal = () => dispatch => {
	localForage.getItem('cart')
	.then(cart => {
		if(cart){
		console.log("loaded this cart from local: ", cart)
		dispatch(setFromLocal(cart))
		dispatch(calculateTotal())
		dispatch(storeLocal())
		}
	})
	.catch(console.error)
}

export const checkoutCart = (address, token) => (dispatch, getState) => {
	dispatch(setMessage(""))
	const state = getState()
	console.log('address', address)
	const add = JSON.stringify(address)
	console.log('add', add)
	const orderItems = state.cart.cart.map(item => {
		return {product_id: item.info.id, price: item.info.price, quantity: item.quantity}
	})
	const user_id = state.auth.id || null;
	const body = {
		order: {user_id, orderItems, address:add, total:state.cart.total},
		token: token
	}
	axios.post('/api/orders', body)
	.then(res => res.data)
	.then(order => {
		console.log(order)
		if(order.message){
			dispatch(setMessage('There was a problem processing your order'))
		}else {
		dispatch(setCurrentOrder(order))
		browserHistory.push("/completeorder")
	}
	})
	.catch(console.error.bind(console))

}

export const increment = (item) => (dispatch) => {
	dispatch(incrementQuant(item));
	dispatch(calculateTotal());
}

export const decrement = (item) => (dispatch) => {
	dispatch(decrementQuant(item));
	dispatch(calculateTotal());
}

export default reducer;
