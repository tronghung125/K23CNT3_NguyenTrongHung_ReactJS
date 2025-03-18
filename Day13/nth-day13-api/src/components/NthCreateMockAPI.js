// Thêm mới dữ liệu 

import React, { useState } from 'react'
import axios from 'axios'
export default function NthCreateMockAPI() {
    // khởi tạo state
    const [nthFullName,setNthFullName] = useState('')
    const [nthAge,setNthAge] = useState(0)
    const [nthActive,setNthActive] = useState(true)

    // api post
    const nthCreateUserApi = "https://67d922b700348dd3e2a9b681.mockapi.io/k23cnt3_nguyentronghung/nth_users";

    // khi submit form
    const nthHandleSubmit = (event)=>{
        event.preventDefault();
        console.log("nthActive:",nthActive);
        let nthNewUser = {nthFullName,nthAge,nthActive};
        console.log(nthNewUser);

        // ghi dữ liệu vào api
        axios
            .post(nthCreateUserApi, nthNewUser)
            .then((nth_response)=>{
                
            })
        
    }
  return (
    <div className='alert alert-info'>
        <h2>Thêm mới users</h2>
        <hr/>
        <form>
            <div className=' mb-1'>
                <label for="nthFullName">Full Name</label>
                <input type='text' name='nthFullName' id="nthFullName" 
                    value={nthFullName}
                    onChange={(ev)=>setNthFullName(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="nthAge">Age</label>
                <input type='number' name='nthAge' id="nthAge" 
                    value={nthAge}
                    onChange={(ev)=>setNthAge(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="nthActive">Active</label>
                <input type='radio' name='nthActive' id="nthActive_hd" value={'true'} 
                    onChange={(ev)=>setNthActive(ev.target.value)} />
                    <label for="nthActive_hd"> Hoạt động</label>
                <input type='radio' name='nthActive' id="nthActive_kh" value={'false'} 
                    onChange={(ev)=>setNthActive(ev.target.value)}/>
                    <label for="nthActive_kh"> Khóa</label>
            </div>
            <button onClick={nthHandleSubmit}>Create</button>
        </form>
    </div>
  )
}