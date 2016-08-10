import React, { Component, PropTypes } from 'react'
import Searcher from '../components/Searcher'
import Movies from '../components/Movies'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(nextMovie) {
    console.log('app handler', nextMovie)
  }

  render() {
    const movies = [{
      title: 'Movie 1',
    }, {
      title: 'Movie 100'
    }]
    const isFetching = false
    const isEmpty = movies.length === 0

    return (
      <div>
        <h1>MovideDB, Hello World!</h1>

        {isEmpty ?
          (isFetching ?
            <p>Loading, please wait</p> :
            <p>Empty</p>) :
          <Searcher onSubmit={this.handleSubmit}/>
        }

        <Movies movies={movies} />
      </div>
    )
  }
}

export default App
