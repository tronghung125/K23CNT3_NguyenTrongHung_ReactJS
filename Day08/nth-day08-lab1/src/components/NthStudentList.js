import React, { Component } from "react";
import NthStudent from "./NthStudent";

class NthStudentList extends Component {
    constructor(props){
        super(props);

    }
        // Hàm xử lý sự kiện xêm
    nthHandleView = (nthStudent)=>{
        // Chuyển dữ liệu lên nthApp
        this.props.onNthHandleView(nthStudent);
    }


  render() {
    // lấy dữ liệu trong props từ nthApp chuyển xuống
    let {renderNthStudents} = this.props;
    console.log("List:",renderNthStudents);
    
    // chuyển dữ liệu vào NthStudent để hiển thị
    let nthElementStudent = renderNthStudents.map((nthItem,index)=>{
        return <NthStudent key={index} renderNthStudent={nthItem} onNthHandleView={this.nthHandleView} />
    })
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>

             {nthElementStudent}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default NthStudentList;