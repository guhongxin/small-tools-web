import React, {Component} from 'react'
import { NavBar, AppMain} from './components/index.js'

class Layout extends Component {
  render() {
    return (<div className="layout">
      <NavBar></NavBar>
      <AppMain></AppMain>
    </div>)
  }
}
export default Layout