import _ from 'lodash'
import { FETCH_REVIEWS } from '../actions';
import { LOADING_REVIEWS } from '../actions';

export default function (state = {loading: false}, action) {
  switch (action.type) {

    case LOADING_REVIEWS:
    return Object.assign({}, state, {loading: true})

    case FETCH_REVIEWS:
      const reviews =  _.mapKeys(action.payload, "id")
      return reviews

    default:
    return state;
  }
}

// case DELETE_POST:
//   return _.omit(state, action.payload)
//
//   case FETCH_POST:
//   const post = action.payload.data;
//   return {...state, [action.payload.data.id]: action.payload.data }

//_.mapKeys(action.payload.data, "id")
//Object.assign({}, state, {loading: false, reviews: reviews})
