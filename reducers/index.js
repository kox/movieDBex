import { combineReducers } from 'redux'
import { SEARCH_MOVIES, RECEIVE_MOVIES } from '../actions'


function movies(state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case SEARCH_MOVIES:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_MOVIES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.movies
      })
    default:
      return state
  }
}

function moviesByMovieDB(state = { }, action) {
  switch (action.type) {
    case SEARCH_MOVIES:
    case RECEIVE_MOVIES:
      return Object.assign({}, state, {
        [action.movieDB]: movies(state[action.movie], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  moviesByMovieDB
})

export default rootReducer
