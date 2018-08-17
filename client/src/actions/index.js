//import fetch from 'isomorphic-fetch'
export const FETCH_REVIEWS = 'fetch_reviews';
export const LOADING_REVIEWS = 'loading_reviews';
export const FETCH_REVIEW = 'fetch_review';
export const LOADING_REVIEW = 'loading_review';


export function fetchReviews() {
  return (dispatch) => {
    dispatch({type: LOADING_REVIEWS});
    return fetch(`/reviews`)
      .then(resp => {return resp.json()}).then(json => {
        dispatch({type: FETCH_REVIEWS, payload: json})})
    }
  }

  export function fetchReview(id) {
    return (dispatch) => {
      dispatch({type: LOADING_REVIEW});
      return fetch(`/reviews/${id}`)
        .then(resp => {return resp.json()}).then(json => {
          dispatch({type: FETCH_REVIEW, payload: json})})
      }
    }
