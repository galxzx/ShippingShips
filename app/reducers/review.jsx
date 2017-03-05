import axios from 'axios';
import {hashHistory} from 'react-router';
/* -----------------    ACTIONS     ------------------ */


const SET_NEWEST_REVIEW = 'SET_NEWEST_REVIEW';



/* ------------   ACTION CREATORS     ------------------ */


export const setNewestReview = reviews => ({ type: SET_NEWEST_REVIEW, reviews})




/* ------------       REDUCER     ------------------ */


const initState = {
	allReviews: []
}

export const reducer = (state = initState, action) => {
	const newState = Object.assign({}, state)
	switch (action.type){

		case SET_NEWEST_REVIEW:
			newState.allReviews = action.reviews
			break;

		default:
			return state;
	}
	return newState;
}


/* ------------       DISPATCHERS     ------------------ */

//Dispatching functions will hit appropriate backend routes to fetch appropriate data

export const addReview = (review) => {
	return (dispatch, getState) => {	
		return axios.post('/api/reviews', review)
		.then(res => res.data)
		.then(review=>{
			let obj = {}
			let state = getState()
			console.log('state',state)
			const selectedProductId = state.product.selectedProduct.id
			review.user= state.auth
			obj[selectedProductId]=[review]
			dispatch(setNewestReview(obj))
		})
		
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