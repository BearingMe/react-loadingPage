import React, { Component } from 'react'

export default class AlertContent extends Component {
  render() {
    return (
      <a className="dropdown-item d-flex align-items-center" href="#">
        <div className="mr-3">
          <div className={this.props.background}>
            <i className={this.props.icon}></i>
          </div>
        </div>
        <div>
          <div className="small text-gray-500">{this.props.date}</div>
          {this.props.content}
        </div>
      </a>
    )
  }
}
