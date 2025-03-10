import React, { Component } from 'react';
import NthStudent from './NthStudent';

export default class NthStudentList extends Component {
  render() {
    let { renderNthStudents, onNthHandleView, onNthHandleEdit, onNthHandleDelete } = this.props;

    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {renderNthStudents.map((student, index) => (
            <NthStudent
              key={student.nthID}
              nthIndex={index + 1}
              renderNthStudent={student}
              onNthHandleView={onNthHandleView}
              onNthHandleEdit={onNthHandleEdit}
              onNthHandleDelete={onNthHandleDelete}
            />
          ))}
        </tbody>
      </table>
    );
  }
}