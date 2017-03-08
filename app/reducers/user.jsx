import axios from 'axios';
import {hashHistory} from 'react-router';
import store from '../store'
/* -----------------    ACTIONS     ------------------ */

const SET_USER_ORDERS = 'SET_USER_ORDERS';

/* ------------   ACTION CREATORS     ------------------ */

export const setUserOrders = (orders) => ({ type: SET_USER_ORDERS, orders})

/* ------------       REDUCER     ------------------ */
const initState = {
	orders: []
}

export const reducer = (state = initState, action) => {
	const newState = Object.assign({}, state)
	switch (action.type){

		case SET_USER_ORDERS:
			newState.orders = action.orders
			break;


		default:
			return state;
	}
	return newState;
}

/* ------------       DISPATCHERS     ------------------ */


export const loadUserOrders = (id) => {
	return (dispatch, getState) => {
		return axios.get('/api/orders/users/'+id)
		.then(res => res.data)
		.then(orders=>{
			dispatch(setUserOrders(orders))
		})
    	.catch(e=>console.e)
	};
};

export const loadAllOrders = (review) => {
	return (dispatch, getState) => {
		return axios.get('/api/orders')
		.then(res => res.data)
		.then(orders=>{
			dispatch(setUserOrders(orders))
		})
    	.catch(e=>console.e)
	};
};

export default reducer;
