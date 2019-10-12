import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor() {
    super()
    this.state = { searchTerm: '' }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let { name, value } = event.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          placeholder="Pesquisar..."
          onChange={this.handleChange}
          name="searchTerm"
          value={this.state.searchTerm}
          className="form-control bg-light border-0 small" />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button">
            <i className="fas fa-search fa-sm"></i>
          </button>
        </div>
      </div>
    )
  }
}
