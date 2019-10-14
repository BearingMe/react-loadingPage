import React, { Component } from 'react'

export default class InfoCard extends Component {
  constructor() {
    super()
    this.state = { colors: [] }
  }

  componentDidMount() {

    switch (this.props.color) {
      case 'green':
        this.setState({ colors: ['border-left-success', 'text-success', 'bg-success'] })
        break;

      case 'blue':
        this.setState({ colors: ['border-left-primary', 'text-primary', 'bg-primary'] })
        break;

      case 'gray':
        this.setState({ colors: ['border-left-secondary', 'text-secondary', 'bg-secondary'] })
        break;

      case 'red':
        this.setState({ colors: ['border-left-danger', 'text-danger', 'bg-danger'] })
        break;

      case 'yellow':
        this.setState({ colors: ['border-left-warning', 'text-warning', 'bg-warning'] })
        break;

      case 'cyan':
        this.setState({ colors: ['border-left-info', 'text-info', 'bg-info'] })
        break;

      case 'silver':
        this.setState({ colors: ['border-left-light', 'text-light', 'bg-light'] })
        break;

      case 'black':
        this.setState({ colors: ['border-left-dark', 'text-dark', 'bg-dark'] })
        break;

      default:
        break;
    }

  }

  render() {
    let border = this.state.colors[0]
    let text = this.state.colors[1]
    let bg = this.state.colors[2]

    return (
      <div className="col-xl-3 col-md-6 mb-4">
        <div className={'card shadow h-100 py-2 ' + border}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className={'text-xs font-weight-bold text-uppercase mb-1 ' + text}>
                  {this.props.title}
                </div>

                {this.props.loading ?

                  (<div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{this.props.loading}%</div>
                    </div>
                    <div className="col">
                      <div className="progress progress-sm mr-2">
                        <div
                          className={'progress-bar ' + bg}
                          role="progressbar"
                          style={{width: this.props.loading + '%'}}
                          aria-valuenow={this.props.loading} aria-valuemin="0"
                          aria-valuemax="100">
                        </div>
                      </div>
                    </div>
                  </div>) :

                  (<div className="h5 mb-0 font-weight-bold text-gray-800">
                    {this.props.content}
                  </div>)
                }

              </div>
              <div className="col-auto">
                <i className={'fas fa-2x text-gray-300 ' + this.props.icon}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

