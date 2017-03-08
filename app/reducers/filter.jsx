import axios from 'axios';
import {login, whoami} from './auth'
/* -----------------    ACTIONS     ------------------ */


const CHANGE_FILTER = 'CHANGE_FILTER';

/* ------------   ACTION CREATORS     ------------------ */

export const changeFilter = (text) => ({ type: CHANGE_FILTER, text })


/* ------------       REDUCER     ------------------ */


const initState = {
  text: ''
}
export const reducer = (state = initState, action) => {
  var newState = Object.assign({}, state)
  switch (action.type){

    case CHANGE_FILTER:
      newState.text = action.text.toLowerCase();
      break;
    default:
      return state;
  }

  return newState;
}


/* ------------       DISPATCHERS     ------------------ */


export const updateFilter = (text) => dispatch => {
  dispatch(changeFilter(text));
}


export default reducer
