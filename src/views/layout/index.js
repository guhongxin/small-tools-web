import React, {Component} from 'react'
import { NavBar, AppMain, SideBar} from './components/index.js'
import './layout.less'
class Layout extends Component {
  render() {
    return (<div className='layout'>
      <div className='sidebar-container'>
        <SideBar></SideBar>
      </div>
      <div className='main-container'>
        {/* <NavBar></NavBar> */}
        <AppMain></AppMain>
      </div>
    </div>)
  }
}
export default Layout