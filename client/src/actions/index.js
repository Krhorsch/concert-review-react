//import fetch from 'isomorphic-fetch'
export const FETCH_REVIEWS = 'fetch_reviews';
export const LOADING_REVIEWS = 'loading_reviews';

export function fetchReviews() {
  return (dispatch) => {
    dispatch({type: LOADING_REVIEWS});
    return fetch(`/reviews`)
      .then(resp => {resp.json()}).then(json => {
        dispatch({type: FETCH_REVIEWS, payload: json})})
    }
  }
