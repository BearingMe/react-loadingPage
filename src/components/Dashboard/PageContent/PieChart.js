import React, { Component } from 'react'
import Chart from 'chart.js'

export default class PieChart extends Component {
  componentDidMount() {
    var pie = document.querySelector('canvas#myPieChart');
    var myPieChart = new Chart(pie, {
      type: 'doughnut',
      data: {
        labels: ["Carga Utilizada", "Carga Restante"],
        datasets: [{
          data: [40, 60],
          backgroundColor: ['#e5e5e5', '#1cc88a'],
          hoverBackgroundColor: ['#e5e5e5', '#17a673'],
          hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10,
        },
        legend: {
          display: false
        },
        cutoutPercentage: 80,
      },
    });

  }

  render() {
    return (
      <div class="col-xl-4 col-lg-5">
        <div class="card shadow mb-4">
          {/* Card Header - Dropdown */}
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Bateria</h6>
          </div>

          {/* Card Body */}
          <div class="card-body">
            <div class="chart-pie pt-4 pb-2">
              <canvas id="myPieChart"></canvas>
            </div>
            <div class="mt-4 text-center small">
              <span class="mr-2">
                <i class="fas fa-circle text-success"></i> Carga Restante
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
