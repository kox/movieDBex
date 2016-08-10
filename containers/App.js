import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectMovie, fetchMoviesIfNeeded, invalidateSearch } from '../actions'
import Searcher from '../components/Searcher'
import Movies from '../components/Movies'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const { dispatch, selectedMovie } = this.props
    dispatch(fetchMoviesIfNeeded(selectedMovie))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedMovie !== this.props.selectedMovie) {
      const { dispatch, selectedMovie } = nextProps
      dispatch(fetchMoviesIfNeeded(selectedMovie))
    }
  }

  handleSubmit(nextMovie) {
    this.props.dispatch(selectMovie(nextMovie))
  }

  render() {
    const { selectedMovie, movies, isFetching } = this.props
    const isEmpty = (movies.length) === 0
    const isSearchFetching = isFetching && (selectedMovie.length > 0)

    return (
      <div>
        <h1>MovideDB, Hello World!</h1>

        {isEmpty ?
          (isSearchFetching ?
            <p>Searching.... please wait</p> :
            <h2>No records</h2> ) :
          <div>
            <Movies movies={movies} />
          </div>
        }
      </div>
    )
  }
}

App.propTypes = {
  selectedMovie: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { selectedMovie, moviesByMovieDB } = state
  const {
    isFetching,
    items: movies
  } = moviesByMovieDB[selectedMovie] || {
    isFetching: true,
    items: []
  }

  return {
    selectedMovie,
    movies,
    isFetching
  }
}

export default connect(mapStateToProps)(App)
