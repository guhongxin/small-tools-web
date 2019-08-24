import React, { Component } from 'react'
import { Menu, Icon, Button } from 'antd'
const { SubMenu } = Menu
class NavBar extends Component {
  state = {
    collapsed: false,
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (<div>表土</div>)
  }
}

export default NavBar