import React, { Component } from 'react'

export default class NthCompInfor extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            //Dữ liệu trong props
            <div>
                <h3> Hiển thị dữ liệu :</h3>
                <p>Họ Và tên: {this.props.HoVaTen}</p>
                <p>Mã sinh viên: {this.props.MaSV}</p>
                <p>Ngày sinh: {this.props.NgaySinh}</p>
                <p>SĐT: {this.props.DienThoai}</p>
                <p>Lớp: {this.props.TenLop}</p>
            </div>
        )
    }
}
