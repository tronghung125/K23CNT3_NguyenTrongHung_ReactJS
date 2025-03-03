import React, { Component } from 'react'

export default class NthRenderListObject extends Component {
    constructor(props){
        super(props);
        this.state={
            nthStudents : [
                {nthId:1,nthName:"Nguyễn Trọng Hưng",nthAge:20},
                {nthId:2,nthName:"Nguyễn Văn Thuận",nthAge:22},
                {nthId:3,nthName:"Trần Thái Linh",nthAge:25},
                {nthId:4,nthName:"Nguyễn Văn Thái",nthAge:30},
            ],
        }
    }



  render() {
        // hiển thị dữ liệu  
        let {nthStudents} = this.state
        let nthElement = nthStudents.map((nthItem)=>{
          return(
            <li>{nthItem.nthId} - {nthItem.nthName} - {nthItem.nthAge}</li>
          );
        })


        let nthrenderElement = nthStudents.map((nthItem,index)=>{
            return(
                <tr key={index}>
                    <td>{nthItem.nthId}</td>
                    <td>{nthItem.nthName}</td>
                    <td>{nthItem.nthAge}</td>
                    <td>
                        <button className='btn btn-success mx-2'>Sửa</button>
                        <button className='btn btn-danger mx-2'>Xóa</button>
                    </td>
                </tr>
            )
        })
    return (
      <div>
        Danh sách sinh viên:
        {nthElement}
        <h2> Change </h2>
        <table className='table table-border'>
            <thead>
                <tr>
                    <th>NthID</th>
                    <th>NthName</th>
                    <th>NthAge</th>
                    <th>NthAction</th>
                </tr>
            </thead>
            <tbody>
               {nthrenderElement}
            </tbody>
        </table>
      </div>
    );
  }
}