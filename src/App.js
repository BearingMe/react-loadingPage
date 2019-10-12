import React, { Fragment } from 'react';
import './App.css';

import Loading from './components/Loading'
import Dashboard from './components/Dashboard/Index';

function App() {
  return (
    <Fragment>
      <Loading />
      <Dashboard />
    </Fragment>
  )
}

export default App;
