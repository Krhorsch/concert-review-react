//import fetch from 'isomorphic-fetch'
export const FETCH_REVIEWS = 'fetch_reviews';
export const LOADING_REVIEWS = 'loading_reviews';
export const FETCH_REVIEW = 'fetch_review';
export const LOADING_REVIEW = 'loading_review';
export const ADD_REVIEW = 'add_review';

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

export function addReview(reviewData, callback) {
  return (dispatch) => {
    return fetch('http://localhost:3001/reviews', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Accept": "application/json",
        },
        body: JSON.stringify(reviewData)
    })
        .then(response => {
          console.log(response.body)
          return dispatch({type: ADD_REVIEW, payload: response})})
        .then(() => callback())
    }
  }
