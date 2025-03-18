import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NthReadApiLocal() {
    // khởi tạo state
    const [nthListUser, setNthListUser] = useState([])
    // đọc dữ liệu từ api local  và set cho NthListUser
    const apiUrl = "http://localhost:3001/users"
    // Lấy danh sách từ apiUrl
    useEffect(()=>{
        axios
            .get(apiUrl)
            .then((nthResponse)=>{
                setNthListUser(nthResponse.data)
            })
            .catch((error)=>{
                console.log("Lỗi");
            })
    },[])

  return (
    <div>
        <h2>Đọc dữ liệu từ API Local</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>FullName</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    nthListUser.map((nthItem, index)=>{
                        return (
                            <tr>
                                <td>{nthItem.fullName}</td>
                                <td>{nthItem.age}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}