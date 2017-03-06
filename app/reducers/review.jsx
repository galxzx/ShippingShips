import axios from 'axios';
import {hashHistory} from 'react-router';
import store from '../store'
/* -----------------    ACTIONS     ------------------ */

const UPDATE_RECENT = 'UPDATE_REVIEWS';
/* ------------   ACTION CREATORS     ------------------ */

export const updateRecent = (review) => ({ type: UPDATE_RECENT, review})

/* ------------       REDUCER     ------------------ */
const initState = {
	mostRecent: {}
}

export const reducer = (state = initState, action) => {
	const newState = Object.assign({}, state)
	switch (action.type){

		case UPDATE_RECENT:
			newState.mostRecent = action.review
			break;

		default:
			return state;
	}
	return newState;
}

/* ------------       DISPATCHERS     ------------------ */

export const addReview = (review) => {
	return (dispatch, getState) => {	
		return axios.post('/api/reviews', review)
		.then(res => res.data)
		.then(review=>{
			dispatch(updateRecent(review))
		})
		.catch( err => console.error(err))
	};
};

export const deleteReview = (reviewId) => {
	return (dispatch, getState) => {	
		return axios.delete('/api/reviews/'+reviewId)
		.then(revId=>{
			dispatch(updateRecent({deleted:revId}))
		})
		.catch( err => console.error(err))
	};
};

export const loadProductById = (id) => dispatch => {
	axios.get('/api/products/'+id)
	.then( res => {
		dispatch(setOneProduct(res.data))
	})
	.catch( err => console.error(err))
}

export default reducer;