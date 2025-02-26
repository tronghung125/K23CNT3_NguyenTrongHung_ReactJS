import React, { Component } from 'react'

export default class NthEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
            nthCourse: 'CSS3'
        }
    }
    nthHandleChage = (event)=>{
        this.setState({
            nthCourse:event.target.value
        })
    }
    nthHandleSubmit = (ev) =>{
        alert('Khóa Học Đã Chọn Khi Submit:' + this.state.nthCourse)
        ev.preventDefault()
    }
  render() {
    return (
      <div className='alert alert-danger'>
       <h2>Form Select</h2>
            <form onSubmit={this.nthHandleSubmit}>
                <label>
                    Chọn khóa học :
                    <select name='nthCourse' id='nthCourse'
                     value={this.state.nthCourse} onChange={this.nthHandleChage}>
                        <option value={"HTML3"}>HTML3</option>
                        <option value="CSS3">CSS3</option>
                        <option value="JS">JavaScript</option>
                        <option value="reactjs">ReactJS</option>
                        <option value="BOOTRAP5">BOOTRAP5</option>
                    </select>
                </label>
                <button className='btn btn-primary'>Bấm zô đi</button>
            </form>
      </div>
    )
  }
}