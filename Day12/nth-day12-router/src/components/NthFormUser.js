import React, { useState } from 'react'

export default function NthFormUser({onNthAddNew}) {

    const [id, setNthId] = useState('')
    const [nthFullName, setNthFullName] = useState('')
    const [nthUserName, setNthUserName] = useState('')
    const [nthPass, setNthPass] = useState('')

   

    const nthHandleSubmit = (event) =>{
        event.preventDefault();
        console.log(id,nthFullName,nthUserName, nthPass)
        
        onNthAddNew({id,nthFullName,nthUserName, nthPass})
    }
  return (
    <div>
        <form>
            <p>Mã sinh viên:
                <input type='text' name='id' value={id} onChange={(ev)=>setNthId(ev.target.value)} /> </p>
            <p>Họ và tên:
                <input type='text' name='nthFullName' value={nthFullName} onChange={(ev)=>setNthFullName(ev.target.value)}/> </p>
            <p>Tài khoản:
                <input type='text' name='nthUserName' value={nthUserName} onChange={(ev)=>setNthUserName(ev.target.value)}/> </p>
            <p>Mật khẩu:
                <input type='password' name='nthPass' value={nthPass} onChange={(ev)=>setNthPass(ev.target.value)} /> </p>

            <p>
                <button name='nthSave' onClick={nthHandleSubmit}>Save</button>
            </p>
        </form>
    </div>
  )
}