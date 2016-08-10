import React, { Component, PropTypes } from 'react'
import Searcher from '../components/Searcher'
import Movies from '../components/Movies'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>MovideDB, Hello World!</h1>

        <Searcher />

        <Movies />
      </div>
    )
  }
}

export default App
