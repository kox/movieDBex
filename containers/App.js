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
    return (
      <div>
        <h1>MovideDB, Hello World!</h1>

        <Searcher onSubmit={this.handleSubmit}/>

        <Movies />
      </div>
    )
  }
}

export default App
