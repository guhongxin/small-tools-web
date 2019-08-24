import React, { Component } from 'react'
class NavBar extends Component {
  constructor() {
    super()
    this.handClick = this.handClick.bind(this)
  }
  handClick() {
    console.log('侧边栏', this)
  }
  render() {
    return (<div onClick={this.handClick}>侧边栏</div>);
  }
}

export default NavBar