import React, { Component, PropTypes } from 'react'

export default class Movies extends Component {
  render() {
    return (
      <ul>
        {this.props.movies.map((movie, i) =>
          <li key={i}>{movie.title}</li>
        )}
      </ul>
    )
  }
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired
}

