import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Menu,Icon } from 'antd'
const { SubMenu } = Menu
import { router } from '@/router/index.js'
class SideBar extends Component {
  state = {
    kk: []
  };
  generate = (param)  => {
    let result = []
    for (let i = 0; i < param.length; i++) {
      if (!param[i].children || param[i].children.length === 0) {
        result.push(<Menu.Item key={param[i].key}>
        <Link to={param[i].path}>
          <i className={`iconfont ${param[i].icon}`} />
          <span>{param[i].name}</span>
        </Link>
      </Menu.Item>)
      } else {
        let subMenu = <SubMenu key={param[i].key}
          title={
            <span>
              <i className={`iconfont ${param[i].icon}`} />
              <span>{param[i].name}</span>
            </span>
          }
        >{this.generate(param[i].children)}</SubMenu>
        result.push(subMenu)
      }
    }
    return result
  }
  render() {
    const sideItem = this.generate(router)
    return(<div className='SideBar'>
      <Menu
        mode="inline"
        theme="dark"
        className="Menu-test"
        defaultSelectedKeys={['1']}
        onClick={this.kk}>
        { sideItem }
      </Menu>
    </div>);
  }
}
export default SideBar