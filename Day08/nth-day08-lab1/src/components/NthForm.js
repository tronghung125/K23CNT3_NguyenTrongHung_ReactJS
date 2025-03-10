import React, { Component } from 'react';

export default class NthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nthID: '',
      nthStudentName: '',
      nthAge: '',
      nthGender: 'Nam',
      nthBirthday: '',
      nthBirthPlace: 'HN',
      nthAddress: ''
    };
  }

  // Cập nhật form khi nhận dữ liệu từ props
  componentDidUpdate(prevProps) {
    if (prevProps.renderNthStudent !== this.props.renderNthStudent) {
      if (this.props.renderNthStudent) {
        this.setState({ ...this.props.renderNthStudent });
      } else {
        // Nếu đang ở chế độ "Thêm mới", reset form
        this.setState({
          nthID: '',
          nthStudentName: '',
          nthAge: '',
          nthGender: 'Nam',
          nthBirthday: '',
          nthBirthPlace: 'HN',
          nthAddress: ''
        });
      }
    }
  }

  // Xử lý thay đổi dữ liệu input
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Gửi dữ liệu khi nhấn "Lưu"
  handleSubmit = (event) => {
    event.preventDefault();
    const { nthID, ...otherState } = this.state;

    if (!nthID || nthID.trim() === "") {
        alert("Vui lòng nhập mã sinh viên (nthID).");
        return;
    }

    if (this.props.isAddingNew) {
        this.props.onNthHandleSaveNew({ nthID, ...otherState });
    } else {
        this.props.onNthHandleUpdate({ nthID, ...otherState });
    }
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{this.props.isAddingNew ? "Thêm sinh viên mới" : "Chỉnh sửa thông tin"}</h3>
          <form onSubmit={this.handleSubmit}>

            {/* Nhập mã sinh viên khi thêm mới */}
            {this.props.isAddingNew && (
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="nthID" value={this.state.nthID} onChange={this.handleChange} required />
                </div>
              </div>
            )}

            {/* Hiển thị mã sinh viên nhưng không cho sửa khi chỉnh sửa */}
            {!this.props.isAddingNew && (
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="nthID" value={this.state.nthID} readOnly />
                </div>
              </div>
            )}

            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="nthStudentName" value={this.state.nthStudentName} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input type="number" className="form-control" name="nthAge" value={this.state.nthAge} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select className="form-control" name="nthGender" value={this.state.nthGender} onChange={this.handleChange}>
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input type="date" className="form-control" name="nthBirthday" value={this.state.nthBirthday} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control" name="nthBirthPlace" value={this.state.nthBirthPlace} onChange={this.handleChange}>
                  <option value="HN">Hà Nội</option>
                  <option value="TpHCM">TP. Hồ Chí Minh</option>
                  <option value="ĐN">Đà Nẵng</option>
                  <option value="QN">Quảng Ninh</option>
                  <option value="HD">Hải Dương</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea className="form-control" name="nthAddress" value={this.state.nthAddress} onChange={this.handleChange} required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2">{this.props.isAddingNew ? "Thêm" : "Lưu"}</button>
          </form>
        </div>
      </div>
    );
  }
}
