import React, { Component } from 'react'
class AppMain extends Component {
  constructor() {
    super()
    this.state = {
      kk: 0
    }
  }
  handleClick = () => {
    let kk = this.state.kk
    this.setState({
      kk: kk++
    })
    // let kk = [1,2,3]
    // kk.map(item => {
    //   console.log(item)
    // })
    this.pl().then(res => {
      console.log('----', res)
    }).catch(err => {
      console.log('****', err)
    })
  }
  pl() {
    return new Promise((resolve, reject) => {
      if (this.kk % 2) {
        resolve({sucess: true, message: '奇数' })
      } else {
        reject({ sucess: false, message: '偶数'})
      }
    })
  }
  render() {
    return (<div onClick={this.handleClick}>内容</div>);
  }
}
export default AppMain
