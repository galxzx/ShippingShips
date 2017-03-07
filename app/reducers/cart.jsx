import axios from 'axios';
import localForage from 'localforage';


/* -----------------    ACTIONS     ------------------ */

const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
const CALCULATE_TOTAL = 'CALCULATE_TOTAL';
const STORE_CART_LOCAL = 'STORE_CART_LOCAL';
const SET_FROM_LOCAL = 'SET_FROM_LOCAL';

/* ------------   ACTION CREATORS     ------------------ */

export const addItem = item => ({ type: ADD_ITEM_TO_CART, item});
export const removeItem = item => ({type: REMOVE_ITEM_FROM_CART, item});
export const calculateTotal = () => ( { type: CALCULATE_TOTAL});
export const storeLocal = () => ( { type: STORE_CART_LOCAL});
export const setFromLocal = (cart) => ({ type: SET_FROM_LOCAL, cart});

/* ------------       REDUCER     ------------------ */

const initState = {
	cart: [],
	total: 0,
	items: 0
}

const localState = localForage.setItem('cart', []);

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
					console.log("this is your Cart", savedCart);
				})
			});
			break;

		case SET_FROM_LOCAL:
			newState.cart = action.cart
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

	const state = getState()
	const orderItems = state.cart.cart.map(item => {
		return {product_id: item.info.id, price: item.info.price, quantity: item.quantity}
	})
	const user_id = state.auth.id || null;
	console.log("stringify address", address)
	const body = {
		order: {user_id, orderItems, address:"temp address", total:state.cart.total},
		token: token
	}
	axios.post('/api/orders', body)
	.then(res => res.data)
	.then(charge => console.log(charge))
	.catch(console.error.bind(console))

}


export default reducer;
