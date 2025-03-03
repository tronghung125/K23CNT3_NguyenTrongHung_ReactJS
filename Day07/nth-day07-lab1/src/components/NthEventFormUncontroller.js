import React, { Component } from 'react'

export default class NthEventFormUncontroller extends Component {
    constructor(props){
        super(props);
        this.studentName = React.createRef();
        this.age = React.createRef();
        this.course = React.createRef();
    }
    HandleSubmit = (event) =>{
        alert("Thông tin khi submit:" + this.studentName.current.value + "-" + this.age.current.value + "-" + this.course.current.value )
        event.preventDefault()
    }
  render() {
    return (
      <div>
        <form onSubmit={this.HandleSubmit}>
            <label>
               Tên Sinh Viên: <input type='text' ref={this.studentName}/>
            </label><br/>

            <label>
               Tuổi: <input type='text' ref={this.age} />
            </label><br/>

            <label>Chọn Khóa Học:
                <select defaultValue="js" ref={this.course}>
                    <option value="js">JavaScript</option>
                    <option value="html">HTML</option>
                    <option value="reactjs">ReactJS</option>
                    <option value="css">CSS</option>
                
                </select>
            </label>
            <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}