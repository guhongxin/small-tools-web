import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom"
import RouterView from '@/components/routerView/index.js'
import { router } from '@/router/index.js'
class AppMain extends Component {
  render() {
    return (<div className="app-main">
      <Route path="/" exact />
      <Redirect from='/' to='/img2base64' />
      <RouterView routes={router}></RouterView>
    </div>);
  }
}
export default AppMain
