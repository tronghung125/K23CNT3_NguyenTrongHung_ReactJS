import React, { Component } from 'react';

export default class NthStudent extends Component {
  render() {
    let { renderNthStudent, nthIndex, onNthHandleView, onNthHandleEdit, onNthHandleDelete } = this.props;

    return (
      <tr>
        <td>{nthIndex}</td>
        <td>{renderNthStudent.nthID}</td>
        <td>{renderNthStudent.nthStudentName}</td>
        <td>{renderNthStudent.nthAge}</td>
        <td>{renderNthStudent.nthGender}</td>
        <td>
          <button className="btn btn-info btn-sm me-2" onClick={() => onNthHandleView(renderNthStudent)}>Xem</button>
          <button className="btn btn-warning btn-sm me-2" onClick={() => onNthHandleEdit(renderNthStudent)}>Sửa</button>
          <button className="btn btn-danger btn-sm" onClick={() => onNthHandleDelete(renderNthStudent.nthID)}>Xóa</button>
        </td>
      </tr>
    );
  }
}