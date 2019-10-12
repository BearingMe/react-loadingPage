import React, { Component } from 'react'

export default class Dropdown extends Component {
  render() {
    return (
      <li className="nav-item dropdown no-arrow mx-1">
        {/* icon and badge  */}
        <a className="nav-link dropdown-toggle" id="alertsDropdown" data-toggle="dropdown">
          <i className={this.props.className}></i>
          <span className="badge badge-danger badge-counter">{this.props.badge}</span>
        </a>

        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in">
          {/* dropdown header  */}
          <h6 className="dropdown-header"> {this.props.title} </h6>

          {this.props.children}

          {/* message footer  */}
          <a className="dropdown-item text-center small text-gray-500" href="#"> {this.props.footer} </a>
        </div>
      </li>
    )
  }
}
