import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NthReadMockAPI() {
    // khởi tạo state 
    const [nthListUser, setNthListUser] = useState([])
    // api
    const nthApiOnline = "https://67d922b700348dd3e2a9b681.mockapi.io/k23cnt3_nguyentronghung/nth_users"
    // Đọc dữ liệu từ api bằng axios
    useEffect(()=>{
        axios
            .get(nthApiOnline)
            .then((nth_response)=>{
                setNthListUser(nth_response.data)
            })
            .catch((error)=>{
                console.log("Lỗi phát sinh");
            })
    },[])

    // view data
    const nthElementUser = nthListUser.map((nth_item, index)=>{
        return(
            <tr>
                <td>{nth_item.nthId}</td>
                <td>{nth_item.nthFullName}</td>
                <td>{nth_item.nthAge}</td>
                <td>{nth_item.nthActive?'Hoạt động':'Khóa'}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        )
    })
  return (
    <div className='alert alert-danger'>
        <h2>Danh sách</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>FullName</th>
                    <th>Age</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                   nthElementUser
                }
            </tbody>
        </table>
    </div>
  )
}