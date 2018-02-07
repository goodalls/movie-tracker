import { combineReducers } from 'redux';
import moviesReducer from './reducers';

const rootReducer = combineReducers({
  movie: moviesReducer,
})

export default rootReducer;