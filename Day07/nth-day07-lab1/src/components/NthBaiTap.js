import React, { Component } from 'react'

export default class NthBaiTap extends Component {
    constructor(props){
        super(props);
        this.state={
            nthDSA : [
                {
                    nthProductId: "A1",
                    nthProductName: "Áo Xanh",
                    nthQuantity: 15,
                    nthPrice: 1000
                },
                {
                    nthProductId: "A2",
                    nthProductName: "Áo Đỏ",
                    nthQuantity: 100,
                    nthPrice: 200
                },
                {
                    nthProductId: "A3",
                    nthProductName: "Áo Tím",
                    nthQuantity: 34,
                    nthPrice: 300
                },
                {
                    nthProductId: "A4",
                    nthProductName: "Áo Vàng",
                    nthQuantity: 45,
                    nthPrice: 455
                }
            ],
            
        }
    }
  render() {
    // hiển thị danh sách sản phâme
    let nthDSA = this.state.nthDSA
    let nthElement =  nthDSA.map((nthItem)=>{
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