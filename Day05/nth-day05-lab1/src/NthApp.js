import React, { Component } from 'react'
import NthFuncCompEvent1 from './components/NthFuncCompEvent1'
import NthClassCompEvent1 from './components/NthClassCompEvent1'
import NthClassCompEventProps from './components/NthClassCompEventProps'
import NthClassCompEventState from './components/NthClassCompEventState'
import NthClassCompEventPostData from './components/NthClassCompEventPostData'

export default class NthApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nthNoiDung: "Chưa có gì"
    }
  }
  // hàm xử lý sự kiện khi components con chuyển dữ liệu lên
  nthHandleDataToApp = (content) => {
    alert(content)
    this.setState({ nthNoiDung: content });  // Cập nhật trạng thái với dữ liệu nhận được
  }
  render() {
    return (
      <div className='container-border mt-3'>
        <h1 className='text-center alert alert -info mt-3'>K23CNT3 - Nguyễn Trọng Hưng - Event and Form</h1>
        <hr />
        <div>
          <h2> Function Components - Events</h2>
          <NthFuncCompEvent1 />
        </div>
        <hr />
        <div>
          <h2>Class Components - Events</h2>
          <NthClassCompEvent1 />
        </div>
        <hr />
        <div>
          <h2>Components - Events; Props</h2>
          <NthClassCompEventProps nthRenderName="Nguyễn Trọng Hưng" />
        </div>
        <hr />
        <div>
          <h2>Class Components - Events; Props</h2>
          <NthClassCompEventProps nthRenderTitle="Chào bạn" />
        </div>
        <hr />
        <div>
          <h2>Class Component - State</h2>
          <NthClassCompEventState />
        </div>
        <hr />
        <div>
          <h2>Class Component - Event; Post Data to app</h2>
          <NthClassCompEventPostData onNthDataToApp={this.nthHandleDataToApp} />
        </div>
      </div>
    )
  }
}
