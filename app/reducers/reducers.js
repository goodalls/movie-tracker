// click on movies and favorite them
const movieReducer = (state =[], action) => {
  switch(action.type) {
    case 'ADD_FAV_MOVIE' :
    return [...state, {id}]
  }
}  