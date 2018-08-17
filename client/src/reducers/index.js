import { combineReducers } from 'redux';
import ReviewsReducer from './reducer_reviews';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  reviews: ReviewsReducer,
  form: formReducer
});

export default rootReducer;
