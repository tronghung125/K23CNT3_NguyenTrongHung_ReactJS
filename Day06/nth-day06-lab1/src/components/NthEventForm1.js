import React, { Component } from 'react'

export default class NthEventForm1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nthStudentName: "Trọng Hưng"
        }
    }
    // Hàm sử lý sự kiện khi dữ liệu trên textbox nthStudentName thay đổi
    nthHandleChage = (event) => {
        // cập nhập setstate
        this.setState({
            nthStudentName: event.target.value
        })
    }
    // khi submit dỏm, lấy dữ liệu và hiển thị
    nthHandleSubmit = (ev) => {
        alert('Hello: ' +  this.state.nthStudentName)
        ev.preventDefault()
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>Form input</h2>
                <form onSubmit={this.nthHandleSubmit}>
                    <label htmlFor='nthStudentName'>
                        <input type='text' name='nthStudentName' id='nthStudentName' value={this.state.nthStudentName}
                            onChange={this.nthHandleChage} />
                    </label>
                    <button className='btn btn-primary'>Click Here</button>
                </form>
            </div>
        )
    }
}