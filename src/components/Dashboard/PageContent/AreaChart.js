import React, { Component } from 'react'
import Chart from 'chart.js'

export default class AreaChart extends Component {
  componentDidMount() {
    let area = document.querySelector('canvas#myAreaChart')

    new Chart(area, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: ["-12h", "", "", "", "", "", "", "", "", "", "", ""],
        datasets: [{
          label: "Earnings",
          lineTension: 0.3,
          backgroundColor: "rgba(78, 115, 223, 0.05)",
          borderColor: "rgba(78, 115, 223, 1)",
          pointRadius: 3,
          pointBackgroundColor: "rgba(78, 115, 223, 1)",
          pointBorderColor: "rgba(78, 115, 223, 1)",
          pointHoverRadius: 3,
          pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
          pointHoverBorderColor: "rgba(78, 115, 223, 1)",
          pointHitRadius: 10,
          pointBorderWidth: 2,
          data: [0, 10, 15, 20, 25, 23, 23, 28, 35, 30, 25, 40],
        }],
      },

      // Configuration options go here
      options: {
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 10,
            right: 25,
            top: 25,
            bottom: 0
          }
        },
        scales: {
          xAxes: [{
            time: {
              unit: 'date'
            },
            gridLines: {
              display: false,
              drawBorder: false
            },
            ticks: {
              maxTicksLimit: 7
            }
          }],
          yAxes: [{
            ticks: {
              maxTicksLimit: 5,
              padding: 10,
            },
            gridLines: {
              color: "rgb(234, 236, 244)",
              zeroLineColor: "rgb(234, 236, 244)",
              drawBorder: false,
              borderDash: [2],
              zeroLineBorderDash: [2]
            }
          }],
        },
        legend: {
          display: false
        },
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          titleMarginBottom: 10,
          titleFontColor: '#6e707e',
          titleFontSize: 14,
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          intersect: false,
          mode: 'index',
          caretPadding: 10
        }
      }
    })
  }

  render() {
    return (
      <div class="col-xl-8 col-lg-7">
        <div class="card shadow mb-4">

          {/* card header  */}
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Histórico de Uso</h6>
          </div>
          <div class="card-body">
            <div class="chart-area">
              <canvas id="myAreaChart" style={{ width: '100%', height: '100%' }}></canvas>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
