import fetch from 'isomorphic-fetch'
import { getMovieDBSearchUrl } from '../config'

export const SEARCH_MOVIES = 'SEARCH_MOVIES'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'


function searchMovies(movieDB) {
  return {
    type: SEARCH_MOVIES,
    movieDB
  }
}

function receiveMovies(movieDB, json) {
  return {
    type: RECEIVE_MOVIES,
    movieDB,
    movies: json.results
  }
}

function fetchMovies(movieDB) {
  return dispatch => {
    dispatch(searchMovies(movieDB))

    let urlFinal = getMovieDBSearchUrl + movieDB
    let params = {
      method: 'GET',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      mode: 'cors',
      cache: 'default'
    }

    return fetch(urlFinal, params)
    .then(response => response.json())
    .then(json => dispatch(receiveMovies(movieDB, json)))
  }
}

function shouldFetchMovies(state, movieDB) {
  const movies = state.moviesByMovieDB[movieDB]

  if (!movies) {
    return true
  }
  if (movies.isFetching) {
    return false
  }
  return false
}
