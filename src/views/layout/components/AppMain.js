import React, { Component } from 'react'
import style from './AppMain.less'
class AppMain extends Component {
  render() {
    return (<div onClick={this.handleClick} className={style.test}>内容</div>);
  }
}
export default AppMain
