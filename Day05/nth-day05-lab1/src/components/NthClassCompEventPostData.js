
import React, { Component } from 'react'

export default class NthClassCompEventPostData extends Component {
    constructor(props){
        super(props);
    }
    // hàm sử lý sự kiện
    nthHandleClick = ()=>{
        // Chuyển dự liêu lên app thông qua props
        this.props.onNthDataToApp("Lesson05 Event; Dữ liệu từ conponents con  - NthClassCompEventPostData ")
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary'
        onClick={this.nthHandleClick}> Button 1 - Chuyển dữ liệu lên App</button>
      </div>
    )
  }
}
