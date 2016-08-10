import React, { Component, PropTypes } from 'react'
export default class Searcher extends Component {
  render() {
    const { onSubmit } = this.props
    let input

    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()

          if (!input.value.trim()) {
            return
          }

          onSubmit(input.value.trim())

          input.value = ''
        }}>
          <input ref={ node => { input = node }} />
          <button type="submit">
            Search Movie
          </button>
        </form>
      </div>
    )
  }
}

Searcher.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

