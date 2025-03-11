import React, { useState } from 'react'

export default function NthUseState() {
    // Khởi Tạo state 
    const [nthCount, setNthCount] = useState(0);

    // Khởi tạo state là 1 mảng
    const nthArr = [1, 2, 3, 4, 5, 6];
    const [nthArray, setNthArray] = useState(nthArr);

    // Khởi Tạo state với mảng object
    const nthStudents = [
        { nthId: "SV001", nthName: "Nguyễn Hưng", nthAge: 20 },
        { nthId: "SV002", nthName: "Phạm Tuấn", nthAge: 23 },
    ];
    const [nthStudentList, setNthStudentList] = useState(nthStudents);

    // Hàm xử lý sự kiện khi thêm mới phần tử vào mảng
   const nthHandleAddList=()=>{
       setNthArray([
         ...nthArray,
        parseInt(Math.random()*100),
       ]) 
    }

    // hàm sử lý sk sinh viên
    const nthHnadleAddNewStudent=()=>{
        let nthStudent = {
            nthId:"SV003",
            nthName:"Duy Nến",
            nthAge:30,
        };
        // thêm vào state nthStudentList
        setNthStudentList([
            ...nthStudentList,
            nthStudent
        ])
    }
    return (
        <div className='alert alert-danger'>
            <h2>UseState Demo</h2>
            <hr />
            <div>
                <h3>Count: {nthCount}</h3>
                <button onClick={()=>setNthCount(nthCount + 1)}>Tăng +</button>
                <button onClick={()=>setNthCount(nthCount - 1)}>Giảm -</button>
            </div>
                <hr/>
            <div>
                <h3>Array: {nthArray.toString()}</h3>
                <button onClick={nthHandleAddList}>Thêm Phần tử +</button>
            </div>
            <hr/>
            <div >
                <h3>Danh sách sinh viên: </h3>
                <table className='table table-bordered '> 
                    <thead className='bg-white'>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        {
                            nthStudentList.map((nthStudent, index) => {
                                return <>
                                    <tr>
                                        <td>{nthStudent.nthId}</td>
                                        <td>{nthStudent.nthName}</td>
                                        <td>{nthStudent.nthAge}</td>
                                    </tr>
                                </>
                            })
                        }
                    </tbody>
                    <tfoot>
                        <button onClick={nthHnadleAddNewStudent}>Thêm mới sinh viên</button>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}