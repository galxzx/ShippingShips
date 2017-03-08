import axios from 'axios';
import {hashHistory} from 'react-router';
import store from '../store'
/* -----------------    ACTIONS     ------------------ */

const SET_USER_ORDERS = 'SET_USER_ORDERS';
const SET_ADMIN_ORDER = 'SET_ADMIN_ORDER';
const SET_CURRENT_ORDER = 'SET_CURRENT_ORDER';

/* ------------   ACTION CREATORS     ------------------ */

export const setUserOrders = (orders) => ({ type: SET_USER_ORDERS, orders})
export const setAdminOrder = (order) => ({ type: SET_ADMIN_ORDER, order})
export const setCurrentOrder = (order) => ({type: SET_CURRENT_ORDER, order})
/* ------------       REDUCER     ------------------ */
const initState = {
	orders: [],
	adminOrder: {orderItems:[]},
	currentOrder: {orderItems:[]}
}

export const reducer = (state = initState, action) => {
	const newState = Object.assign({}, state)
	switch (action.type){

		case SET_USER_ORDERS:
			newState.orders = action.orders
			break;

		case SET_ADMIN_ORDER:
			newState.adminOrder = action.order
			break;

		case SET_CURRENT_ORDER:
			newState.currentOrder = action.order


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
    	.catch(e=>console.error(e))
	};
};

export const loadAllOrders = () => {
	return (dispatch, getState) => {
		return axios.get('/api/orders')
		.then(res => res.data)
		.then(orders=>{
			dispatch(setUserOrders(orders))
		})
    	.catch(e=>console.error(e))
	};
};

export const changeOrderStatus = (orderId, status) => dispatch => {
	return axios.put(`/api/orders/${orderId}`, {status})
	.then (() => {
		return dispatch(loadAllOrders())
	})
	.catch(e=>console.error(e))
}

export const loadAdminOrder = (orderId) => dispatch => {
	return axios.get(`/api/orders/admin/${orderId}`)
		.then(res => res.data)
		.then(order => {
			console.log('order', order)
			dispatch(setAdminOrder(order))
		})
		.catch(e => console.error(e))
}

export default reducer;
