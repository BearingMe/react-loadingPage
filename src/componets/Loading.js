import React from 'react'

export default function Loadind() {
  return (
    <div className="container-loading" style={{ background: '#161616' }}>
      <h1 className="loading"> LOADING </h1>
      <div className="pace">
        <div className="pace-loading"></div>
      </div>
    </div>
  )
}
