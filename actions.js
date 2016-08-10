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
