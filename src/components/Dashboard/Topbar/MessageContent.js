import React, { Component } from 'react'

export default class MessageContent extends Component {
  render() {
    return (
      <a className="dropdown-item d-flex align-items-center" href="#">
        <div className="dropdown-list-image mr-3">
          <img className="rounded-circle" src={this.props.photo} alt="" />
          <div className={this.props.status}></div>
        </div>
        <div>
          <div className="text-truncate">{this.props.content}</div>
          <div className="small text-gray-500">{this.props.info}</div>
        </div>
      </a>
    )
  }
}
