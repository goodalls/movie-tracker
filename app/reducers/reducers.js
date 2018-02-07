import api from '../apiCalls';

const moviesReducer(state=[], action) {
  switch(action.type) {
    case 'GET_MOVIES':
      const testRun = await api.fetchParse(api.test);
      const moviesArray = api.movieCleaner(testRun);
      return([...state, ...moviesArray])
    default:
      return state
  }
}

