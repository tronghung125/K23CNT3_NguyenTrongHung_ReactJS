import React, { Component } from 'react';

export default class NthEventForm5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nthName: "Trọng Hưng",
            nthAge: 20,
            nthGender: "Male",
            nthCourse: "React JS"
        };
    }

    // Hàm sự kiện change
    nthHandleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    nthHandleSubmit = (event) => {
        event.preventDefault();
        alert(this.state.nthName + "\n"
            + this.state.nthAge + "\n"
            + this.state.nthGender + "\n"
            + this.state.nthCourse);

        // Kiểm tra nếu props tồn tại trước khi gọi
        if (this.props.onNthHandleSubmit) {
            this.props.onNthHandleSubmit(this.state);
        }
    }

    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info</h2>
                <div>
                    <label htmlFor='nthName'>Student Name:</label>
                    <input type='text' name='nthName' id='nthName'
                        value={this.state.nthName}
                        onChange={this.nthHandleChange}
                        className='mx-2 text-center' />
                </div>
                <div>
                    <label htmlFor='nthAge'>Student Age:</label>
                    <input type='text' name='nthAge' id='nthAge'
                        value={this.state.nthAge}
                        onChange={this.nthHandleChange}
                        className='mx-2 text-center' />
                </div>

                <div>
                    <label>Student Gender:</label>
                    <input type='radio' name='nthGender' id='nthMale' className='mx-2'
                        value="Male"
                        checked={this.state.nthGender === 'Male'}
                        onChange={this.nthHandleChange} />
                    <label htmlFor='nthMale'>Male</label>

                    <input type='radio' name='nthGender' id='nthFemale' className='mx-2'
                        value="Female"
                        checked={this.state.nthGender === 'Female'}
                        onChange={this.nthHandleChange} />
                    <label htmlFor='nthFemale'>Female</label>

                    <input type='radio' name='nthGender' id='nthNone' className='mx-2'
                        value="None"
                        checked={this.state.nthGender === 'None'}
                        onChange={this.nthHandleChange} />
                    <label htmlFor='nthNone'>None</label>
                </div>

                <div>
                    <label>
                        Chọn khóa học:
                        <select name='nthCourse' id='nthCourse' className='mx-2 text-center'
                            value={this.state.nthCourse} onChange={this.nthHandleChange}>
                            <option value="HTML3">HTML3</option>
                            <option value="CSS3">CSS3</option>
                            <option value="JS">JavaScript</option>
                            <option value="reactjs">ReactJS</option>
                            <option value="BOOTRAP5">BOOTRAP5</option>
                        </select>
                    </label>
                </div>
                <button onClick={this.nthHandleSubmit} className='btn btn-primary'>Bấm</button>
            </div>
        );
    }
}
