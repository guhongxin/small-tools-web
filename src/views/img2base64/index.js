import React,  { Component } from 'react'
import { message, Button } from 'antd'
import './index.less'
class Img2base64 extends Component {
  state = {
    base64: ''
  }
  openfile = () => {
    //  打开文件
    
    let input = document.createElement('input')
    input.type = 'file'
    input.click()
    input.onchange = (e) => {
      let file = e.target.files[0]
      let reg = /\.(png|jpg|gif|jpeg)$/
      if (!reg.test(file.name)) {
        message.warning('请选择正确格式的图片')
      }
      e.target.value = ''
      let image = new Image()
      image.src = window.URL.createObjectURL(file)
      image.onload = () => {
        var canvas = document.createElement("canvas")
        canvas.width = image.width
        canvas.height = image.height
        canvas.getContext("2d").drawImage(image, 0, 0)
        let _base64 = canvas.toDataURL()
        this.setState({
          base64: _base64
        })
        URL.revokeObjectURL(image.src)
      }
    }
  }
  clearClick = () => {
    this.setState({
      base64: ''
    })
  }
  copyClick = (e) => {
    let _base64 = this.state.base64
    if (!_base64) {
      message.warning('请选择转换的图片')
      return false
    }
    this.copyText(_base64)
  }
  copyText(text) {
    let input = document.createElement('input')
    input.style.display ="hidden"
    input.value = text; // 修改文本框的内容
    document.body.append(input)
    input.select() // 选中文本
    document.execCommand("copy") // 执行浏览器复制命令
    document.body.remove(input)
  }
  render() {
    return (<div className="img-2-base64">
      <div className="edit-area">
        <div className="change-image" onClick={this.openfile}>点击选择需要转换成Base64的图片</div>
        <div className="btn-area">
          <Button type="primary" className="btn" onClick={this.copyClick}>复制</Button>
          <Button type="primary" className="btn" onClick={this.clearClick}>清空</Button>
        </div>
      </div>
      <div className="base64_output">
        {this.state.base64}
      </div>
    </div>)
  }
}

export default Img2base64