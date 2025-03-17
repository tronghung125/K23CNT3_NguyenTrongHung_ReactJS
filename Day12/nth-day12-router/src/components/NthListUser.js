import React from 'react'

export default function NthListUser({renderNthUsers}) {

    const nthElements = renderNthUsers.map((nthItem, index)=>{
        return (
            <>
                <tr key={index}> 
                    <td>{index+1}</td>
                    <td>{nthItem.id}</td>
                    <td>{nthItem.nthFullName}</td>
                    <td>{nthItem.nthUserName}</td>
                    <td>{nthItem.nthPass}</td>
                </tr>
            </>)
    })
  return (
    <div>
        <h2>Danh sách tài khoản</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>UserName</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {nthElements}
            </tbody>
        </table>
    </div>
  )
}