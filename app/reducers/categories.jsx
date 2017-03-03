import axios from 'axios';
/* -----------------    ACTIONS     ------------------ */


const SET_CATEGORIES = 'SET_CATEGORIES';
const SET_CAT_PRODUCTS = 'SET_CAT_PRODUCTS';

/* ------------   ACTION CREATORS     ------------------ */

export const setCategories = categories => ({ type: SET_CATEGORIES, categories })
export const selCatProducts = (products) => ({type: SET_CAT_PRODUCTS, products})

/* ------------       REDUCER     ------------------ */


const initState = {
  selectedCategory: "",
  categories: ['powerboat', 'sailboat', 'commercial', 'pleasurecraft', 'military'],
  selCatProducts: []
}

export const reducer = (state = initState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type){

    case SET_CATEGORIES:
      newState.categories = action.categories;
      break;
    case SET_CAT_PRODUCTS:
      newState.selCatProducts = action.products;
      break;
    default:
      return state;
  }
  return newState;
}


/* ------------       DISPATCHERS     ------------------ */

//Dispatching functions will hit appropriate backend routes to fetch appropriate data

// export const loadCategories = () => dispatch => {
//   axios.get('/api/categories')
//   .then( res => {
//     dispatch(setCategories(res.data))
//   })
//   .catch( err => console.error(err))
// }

export const loadProductsInCat = (category) => dispatch => {
  axios.get(`/api/products/cat/${category}`)
  .then(res => {
    dispatch(selCatProducts(res.data))
  })
  .catch(console.error)
}


export default reducer;
