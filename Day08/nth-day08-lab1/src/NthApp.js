import React, { Component } from 'react';
import NthControl from './components/NthControl';
import NthStudentList from './components/NthStudentList';
import NthForm from './components/NthForm';
import NthStudentDetail from './components/NthStudentDetail';

class NthApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nthStudents: [
        { nthID: "SV002", nthStudentName: "Nguyễn Trọng Hưng", nthAge: 19, nthGender: "Nam", nthBirthday: "01/02/2005", nthBirthPlace: "HN", nthAddress: "Gia Lâm" },
        { nthID: "SV001", nthStudentName: "Phạm Tuấn Anh", nthAge: 19, nthGender: "Nam", nthBirthday: "05/11/2005", nthBirthPlace: "QN", nthAddress: "Yên Xá" },
        { nthID: "SV003", nthStudentName: "Nguyễn Hữu Tuấn", nthAge: 19, nthGender: "Nam", nthBirthday: "04/09/2005", nthBirthPlace: "HD", nthAddress: "Hải Dương" },
        { nthID: "SV004", nthStudentName: "Nguyễn Gia Duy", nthAge: 20, nthGender: "Nam", nthBirthday: "13/01/2005", nthBirthPlace: "HD", nthAddress: "Yên Xá" }
      ],
      filteredStudents: [],
      selectedStudent: null,
      showDetail: false,
      isAddingNew: false,
      searchKeyword: ''
    };
  }

  componentDidMount() {
    this.setState({ filteredStudents: this.state.nthStudents });
  }

  // 🔎 Xử lý tìm kiếm sinh viên theo tên
  onNthHandleSearch = (keyword) => {
    this.setState({ searchKeyword: keyword }, this.filterStudents);
  };

  // Hàm lọc danh sách sinh viên dựa vào từ khóa tìm kiếm
  filterStudents = () => {
    const { nthStudents, searchKeyword } = this.state;
    const filtered = nthStudents.filter(student =>
      student.nthStudentName.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    this.setState({ filteredStudents: filtered });
  };

  // 🔎 Xử lý khi bấm "Xem"
  onNthHandleView = (nthStudent) => {
    this.setState({
      selectedStudent: nthStudent,
      showDetail: true,
      isAddingNew: false
    });
  };

  // ❌ Xử lý khi bấm "Đóng"
  onNthHandleCloseDetail = () => {
    this.setState({ showDetail: false });
  };

  // ✏️ Xử lý khi bấm "Sửa"
  onNthHandleEdit = (nthStudent) => {
    this.setState({ selectedStudent: nthStudent, showDetail: false, isAddingNew: false });
  };

  // 🗑 Xử lý khi bấm "Xóa"
  onNthHandleDelete = (studentID) => {
    this.setState(prevState => {
      const updatedStudents = prevState.nthStudents.filter(student => student.nthID !== studentID);
      return { nthStudents: updatedStudents, showDetail: false };
    }, this.filterStudents);
  };

  // ✅ Cập nhật sinh viên sau khi chỉnh sửa
  onNthHandleUpdate = (updatedStudent) => {
    this.setState(prevState => {
      const updatedStudents = prevState.nthStudents.map(student =>
        student.nthID === updatedStudent.nthID ? updatedStudent : student
      );
      return { nthStudents: updatedStudents, selectedStudent: null, isAddingNew: false };
    }, this.filterStudents);
  };

  // 🆕 Xử lý khi bấm "Thêm mới"
  onNthHandleAddNew = () => {
    this.setState({
      selectedStudent: null,
      showDetail: false,
      isAddingNew: true
    });
  };

  // 🆕 Xử lý khi lưu sinh viên mới
  onNthHandleSaveNew = (newStudent) => {
    this.setState(prevState => ({
      nthStudents: [...prevState.nthStudents, newStudent],
      selectedStudent: null,
      isAddingNew: false
    }), this.filterStudents);
  };

  render() {
    return (
      <div>
        <h1 className='text-center'>Nguyễn Trọng Hưng - K23CNT3 - Mini Project</h1>
        <section className='container-fluid mt-3'>
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                <NthControl
                  onNthHandleAddNew={this.onNthHandleAddNew}
                  onNthHandleSearch={this.onNthHandleSearch}
                />
                <NthStudentList
                  renderNthStudents={this.state.filteredStudents}
                  onNthHandleView={this.onNthHandleView}
                  onNthHandleEdit={this.onNthHandleEdit}
                  onNthHandleDelete={this.onNthHandleDelete}
                />
              </div>
            </div>

            <div className="col-5 grid-margin">
              {this.state.showDetail ? (
                <NthStudentDetail
                  student={this.state.selectedStudent}
                  onClose={this.onNthHandleCloseDetail}
                />
              ) : (
                <NthForm
                  renderNthStudent={this.state.selectedStudent}
                  onNthHandleUpdate={this.onNthHandleUpdate}
                  onNthHandleSaveNew={this.onNthHandleSaveNew}
                  isAddingNew={this.state.isAddingNew}
                />
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NthApp;