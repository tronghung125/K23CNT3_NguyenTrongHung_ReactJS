import React, { Component } from 'react'

export default class NthEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state={
            nthGioiTinh: "Nam"
        }
    }
    nthHanleChange = (event)=>
    {
        this.setState({
            nthGioiTinh:event.target.value
        })
    }

    // Hmaf xử lý sự kiện submit form
    nthHandleSubmit = (event)=>{
        event.preventDefault()
        alert('Giới tính của bạn là:' + this.state.nthGioiTinh)
    }
  render() {
    return (
      <div className='alert alert-success'>
            <h2>Form Input - Radio</h2>
            <form>
                <div>
                    <label htmlFor=''>Giới tính:</label>
                    <input type='radio' name='nthGioiTinh'  id='nthNam' className='mx-2'
                     value="Nam" checked={this.state.nthGioiTinh === 'Nam'} onChange={this.nthHanleChange}/> 
                        <label htmlFor='nthNam'>Nam</label>
                    <input type='radio' name='nthGioiTinh'  id='nthNu' className='mx-2'
                    value="Nữ" checked={this.state.nthGioiTinh === 'Nữ'} onChange={this.nthHanleChange}/> 
                        <label htmlFor='nthNu'>Nữ</label>
                    <input type='radio' name='nthGioiTinh'   id='nthKhac' className='mx-2'
                    value="Khác" checked={this.state.nthGioiTinh === 'Khác'} onChange={this.nthHanleChange}/> 
                        <label htmlFor='nthKhac'>Khác</label>
                  
                </div>
                <button onClick={this.nthHandleSubmit} className='btn btn-success mt-3'> SubMit </button>
            </form>
      </div>
    )
  }
}