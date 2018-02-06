import { combineR//educers } from 'redux';
import movieReducer from './reducers';

const rootReducer = combineReducers({
  movie: movieReducer,
})

export default rootReducer;