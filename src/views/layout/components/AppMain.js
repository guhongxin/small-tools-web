import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom"
const _import = require('@/router/_import_' + process.env.NODE_ENV)
class AppMain extends Component {
  render() {
    return (<div className="app-main">
      <Route path="/" exact />
      <Redirect from='/' to='/img2base64' />
      <Route path="/img2base64" component={_import('img2base64/index')} />
      <Route path="/calcSting" component={_import('calcstring/index')} />
    </div>);
  }
}
export default AppMain
