import React, { Component } from 'react'

export default class NthBaiTap extends Component {
    constructor(props){
        super(props);
        this.state={
            nthInitialState  : [
                {
                    nthProductId: "P001",
                    nthProductName: "IPhone 10",
                    nthQuantity: 15,
                    nthPrice: 1000
                },
                {
                    nthProductId: "P002",
                    nthProductName: "IPhone 11",
                    nthQuantity: 20,
                    nthPrice: 1250
                },
                {
                    nthProductId: "P003",
                    nthProductName: "IPhone 12",
                    nthQuantity: 10,
                    nthPrice: 1500
                },
                {
                    nthProductId: "P004",
                    nthProductName: "IPhone 13",
                    nthQuantity: 15,
                    nthPrice: 2000
                }
            ],
            
        }
    }
  render() {
    // hiển thị danh sách sản phâme
    let nthInitialState = this.state.nthInitialState
    let nthElement =  nthInitialState.map((nthItem)=>{
        return(
          <tr>
            <td>{nthItem.nthProductId}</td>
            <td>{nthItem.nthProductName}</td>
            <td>{nthItem.nthQuantity}</td>
            <td>{nthItem.nthPrice}</td>
            <td>
                    <button className='btn btn-success mx-2'>Sửa</button>
                     <button className='btn btn-danger mx-2'>Xóa</button>
            </td>
          </tr>
        )
    })
    return (
      <div>
            <table className='table table-border'>
                <thead>
                    <tr>
                        <th>Mã Sản Phẩm</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Số Lượng</th>
                        <th>Giá</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                   {nthElement}
                </tbody>
            </table>
      </div>
    )
  }
}