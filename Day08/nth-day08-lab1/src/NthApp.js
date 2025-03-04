import React, { Component } from "react";
import NthControl from "./components/NthControl";
import NthStudentList from "./components/NthStudentList";
import NthForm from "./components/NthForm";

class NthApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      nthStudents:[
        {nthId:"SV001",nthStudentName:"Trịnh Văn Chung",nthAge:46,nthGender:"Nam",nthBirthday:"25/05/1979",nthBirthPlace:"HN", nthAddress:"Tòa VCN, 25 Vũ Ngọc Phan"},
        {nthId:"SV002",nthStudentName:"Chu Nguyên Chương",nthAge:188,nthGender:"Nữ",nthBirthday:"25/05/1179",nthBirthPlace:"HP", nthAddress:"Trung quốc"},
        {nthId:"SV003",nthStudentName:"Tần Thủy Hoàng",nthAge:55,nthGender:"Nam",nthBirthday:"25/05/1079",nthBirthPlace:"TpHCM", nthAddress:"Trung Quốc"},
        {nthId:"SV004",nthStudentName:"Hoàng Thùy Linh",nthAge:55,nthGender:"Nam",nthBirthday:"25/05/1079",nthBirthPlace:"TpHCM", nthAddress:"Hồ chí minh"},
      ],
      nthStudent:"",

    }
  }

  // Hàm xử lý sự kiện view Student
  nthHandleView = (nthStudent)=>{
    this.setState({
      nthStudent:nthStudent,
    })
  }

  render() {
    // log
    console.log("View Student:", this.state.nthStudent);
    
    return (
      <div>
        <h1 className="text-center">
          Nguyễn Trọng Hưng - K23CNT3 - Mini Project1
        </h1>
        <section className="container-fluid mt-3">
          <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">

                {/* header */}
                <NthControl />
                {/* danh sách sinh vien  */}
                <NthStudentList  renderNthStudents={this.state.nthStudents} onNthHandleView={this.nthHandleView}/>
              </div>
            </div>

            <div className="col-5 grid-margin">
              {/* form  */}
              <NthForm  renderNthStudent = {this.state.nthStudent}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NthApp;