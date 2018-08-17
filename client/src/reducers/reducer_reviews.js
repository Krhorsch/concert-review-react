import _ from 'lodash'
import { FETCH_REVIEWS } from '../actions';
import { LOADING_REVIEWS } from '../actions';
import { FETCH_REVIEW } from '../actions';
import { LOADING_REVIEW } from '../actions';

export default function (state = {loading: false, reviews: {}}, action) {
  switch (action.type) {

    case LOADING_REVIEWS:
    return Object.assign({}, state, {loading: true})

    case FETCH_REVIEWS:
      const reviews =  _.mapKeys(action.payload, "id")
      return {loading: false, reviews: reviews}

      case LOADING_REVIEW:
      return Object.assign({}, state, {loading: true})

      case FETCH_REVIEW:
        return {loading: false, review: action.payload}

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
