import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NthNavNar from './components/NthNavNar'
import NthHome from './components/NthHome'
import NthAbout from './components/NthAbout'
import NthContact from './components/NthContact'
import NthListUser from './components/NthListUser'
import NthFormUser from './components/NthFormUser'

export default function NthApp() {

  const listUsers  = [
    {id:"SV001", nthFullName:"Nguyễn Trọng Hưng", nthUserName:"Huwng", nthPass:"123456a@"},
    {id:"SV002", nthFullName:"Phạm Tuấn Anh", nthUserName:"Tuan", nthPass:"123456a@"},
    {id:"SV003", nthFullName:"Nguyễn Văn Minh", nthUserName:"Minh", nthPass:"123456a@"},
  ]

  const[nthUsers, setNthUsers] = useState(listUsers)

  // Hàm xử lý sự kiện thêm mới
  const nthHandleAdd = (nthParam)=>{
    console.log("nthHandleAdd:", nthParam);
    
    setNthUsers(prev =>{ 
      return [
        ...prev,
        nthParam
      ]
    })
  }
  return (
    <div className='container border my-3'>
        <h1>React Router Dom - Demo - [Nguyễn Trọng Hưng - K23CNT3]</h1>
        <hr/>
        <Router>
            <NthNavNar />
            <Routes>
                <Route path='/' element = {<NthHome />} />
                <Route path='/about' element = {<NthAbout />} />
                <Route path='/contact' element = {<NthContact />} />
                <Route path='/list-user' element = {<NthListUser  renderNthUsers={nthUsers}/>} />
                <Route path='/create-user' element = {<NthFormUser  onNthAddNew={nthHandleAdd}/>} />
            </Routes>
        </Router>
    </div>
  )
}