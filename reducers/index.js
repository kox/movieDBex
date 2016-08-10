import { combineReducers } from 'redux'
import { SELECT_MOVIE, SEARCH_MOVIES,
  RECEIVE_MOVIES } from '../actions'

function selectedMovie(state = '', action) {
  switch (action.type) {
    case SELECT_MOVIE:
      return action.movie
    default:
      return state
  }
}

function movies(state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case SEARCH_MOVIES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      })
    case RECEIVE_MOVIES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.movies,
        didInvalidate: false
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
  moviesByMovieDB,
  selectedMovie
})

export default rootReducer
