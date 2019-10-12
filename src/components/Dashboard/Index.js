import React, { Component } from 'react'

import './dashboard.css'
import Topbar from './Topbar/Index'

export default class Dashboard extends Component {
  render() {
    return (
      <div className="page-top">
        <div className="wrapper">
          <div className="content-wrapper">
            <div className="content">
              <Topbar />

            </div>
          </div>
        </div >
      </div >
    )
  }
}
