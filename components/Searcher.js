import React, { Component } from 'react'

export default class Searcher extends Component {
  render() {
    let input

    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()

          console.log(input.value)
        }}>
          <input ref={ movie => { input = movie }} />
          <button type="submit">
            Search Movie
          </button>
        </form>
      </div>
    )
  }
}

