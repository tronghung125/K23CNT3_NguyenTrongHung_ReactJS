import React, { Component } from "react";

class NthStudent extends Component {
    constructor(props){
        super(props);
    }

    // Hàm xử lý chức năng xem
    nthHandleView = (nthStudent)=>{
        // Chuyển lên NthStudentList
        this.props.onNthHandleView(nthStudent);
    }
  render() {
    // lấy đối tượng dữ liệu chuyển từ NthStudentList
    let {renderNthStudent, key} = this.props;
    console.log("Student:",renderNthStudent);
    
    return (
      <>
        <tr>
          <td>{key}</td>
          <td>{renderNthStudent.nthId}</td>
          <td>{renderNthStudent.nthStudentName}</td>
          <td>{renderNthStudent.nthAge}</td>
          <td>{renderNthStudent.nthGender}</td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text" 
                    onClick={()=>this.nthHandleView(renderNthStudent)}
                    >
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text">
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default NthStudent;