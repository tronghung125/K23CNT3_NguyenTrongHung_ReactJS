import React, { Component } from 'react';

export default class NthClassComp extends Component {
  constructor(props) {
    super(props); // Truyền props đúng cách

    // Khởi tạo state
    this.state = {
      fullName: 'Hưng',
      age: 20,
      phone: '0329930596'
    };
  }
  // Hàm xử lý dữ liệu
  changeInfo = (ev) =>{
    // Cập nhật state
    this.setState({
        fullName:"Trọng Hưng"
    })
  }
  render() {
    return (
      <div className='alert alert-success'>
        <h2>Trình bày dữ liệu từ state</h2>
        <p>Full Name: {this.state.fullName}</p>
        <p>Age: {this.state.age}</p>
        <p>Phone: {this.state.phone}</p>
        <hr/>
        <button className='btn btn-primary' onClick={this.changeInfo}>Change Info</button>
        <hr/>
        <h3>Lấy dữ liêu từ Props</h3>
        <p>Name: {this.props.renderName}</p>

        <p>Fullname: {this.props.renderUsers ?this.props.renderUsers.fullname:''}</p>
        <p>Age: {this.props.renderUsers ?this.props.renderUsers.age:''}</p>
        <p>Phone: {this.props.renderUsers ?this.props.renderUsers.phone:''}</p>

      </div>
    );
  }
}
