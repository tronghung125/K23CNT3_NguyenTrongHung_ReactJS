import React, { Component } from 'react'

export default class NthClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            nthFullName:"Nguyễn Trọng Hưng",
            nthAge:20
        }
    }
    // hàm xử lý sự kiện
    nthEventHandleClick1 = ()=>{
        // lấy dữ lieuj trong state
        alert('Tên : ' + this.state.nthFullName + '\n Tủi : ' + this.state.nthAge)
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary' onClick={this.nthEventHandleClick1}>Button1 - Dữ liệu trong state</button>
    
      </div>
    )
  }
}