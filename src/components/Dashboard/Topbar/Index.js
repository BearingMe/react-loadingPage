import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Dropdown from './Dropdown'
import AlertContent from './AlertContent'
import MessageContent from './MessageContent'

export default class Topbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

        {/* topbar search block */}
        <form className="d-none d-sm-inline-block form-inline mr-auto my-2 my-md-0 mw-100 navbar-search pl-2">
          <SearchBar />
        </form>

        {/* topbar navbar */}
        <ul className="navbar-nav ml-auto w-100 justify-content-end">

          {/* dropdown navbar search  */}
          <li className="nav-item dropdown no-arrow d-sm-none mr-auto">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown">
              <i className="fas fa-search fa-sm"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in">
              <form className="form-inline mr-auto w-100 navbar-search">
                <SearchBar />
              </form>
            </div>
          </li>

          <Dropdown
            className="fas fa-bell fa-fw"
            badge="3+"
            title="Alerts Center"
            footer="Show All alerts"
          >
            <AlertContent
              icon="fas fa-file-alt text-white"
              background="icon-circle bg-primary"
              date="December 12, 2019"
              content="A new monthly report is ready to download!"
            />

            <AlertContent
              icon="fas fa-donate text-white"
              background="icon-circle bg-success"
              date="December 7, 2019"
              content="$290.29 has been deposited into your account!"
            />

            <AlertContent
              icon="fas fa-exclamation-triangle text-white"
              background="icon-circle bg-warning"
              date="December 2, 2019"
              content="Spending Alert: We've noticed unusually high spending for your account."
            />
          </Dropdown>

          <Dropdown
            className="fas fa-envelope fa-fw"
            badge="7"
            title="Message Center"
            footer="Read More Messages"
          >
            <MessageContent
              photo="https://source.unsplash.com/fn_BT9fwg_E/60x60"
              status="status-indicator bg-success"
              content="Hi there! I am wondering if you can help me with a problem I've been having."
              info="Emily Fowler · 58m"
            />

            <MessageContent
              photo="https://source.unsplash.com/AU4VPcFN4LE/60x60"
              status="status-indicator"
              content="I have the photos that you ordered last month, how would you like them sent to you?"
              info="Jae Chun · 1d"
            />

            <MessageContent
              photo="https://source.unsplash.com/CS2uCrpNzJY/60x60"
              status="status-indicator bg-warning"
              content="Last month's report looks great, I am very happy with the progress so far, keep up the good work!"
              info="Morgan Alvarez · 2d"
            />

            <MessageContent
              photo="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
              status="status-indicator bg-success"
              content="Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good..."
              info="Chicken the Dog · 2w"
            />
          </Dropdown>


          <div className="topbar-divider p-1"></div>

          {/* user information */}
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle pr-2" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-sm-inline text-gray-600 small">BearingMe</span>
              <img className="img-profile rounded-circle" src="https://cdn.dribbble.com/users/2050046/screenshots/6111922/68.jpg" />
            </a>

            {/* dropdown user information  */}
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
              <a className="dropdown-item" href="#">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
            </a>

              <a className="dropdown-item" href="#">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Settings
            </a>

              <a className="dropdown-item" href="#">
                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                Activity Log
            </a>

              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
            </a>

            </div>
          </li>

        </ul>
      </nav>
    )
  }
}
