import React, { Component } from 'react'
import Chart from 'chart.js'
import InfoCard from './InfoCard'
import AreaChart from './AreaChart'
import PieChart from './PieChart'

export default class PageContent extends Component {
  render() {
    return (
      <div className="container-fluid">

        {/* page heading  */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Painel de Controle</h1>
          <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Gerar Relatório </a>
        </div>

        <div className="row justify-content-center">

          {/* Info Cards  */}
          <InfoCard
            color="blue"
            icon="fa-calendar"
            title="Earnings (Monthly)"
            content="$40,000"
          />

          <InfoCard
            color="green"
            icon="fa-battery-full"
            title="Bateria"
            loading="66"
          />

          <InfoCard
            color="cyan"
            icon="fa-memory"
            title="Uso de memória"
            loading="93"
          />

          <InfoCard
            color="yellow"
            icon="fa-clipboard-list"
            title="Tarefas Pendentes"
            content="18"
          />

          <AreaChart />

          <PieChart />

        </div>

      </div>
    )
  }
}
