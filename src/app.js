import React from 'react'
import { HashRouter } from "react-router-dom"

import Layout from '@/views/layout'
function App() {

  return (<div className="main">
    <HashRouter>
      <Layout></Layout>
    </HashRouter>
  </div>)
}
export default App