import React from 'react'
import NthReadApiLocal from './components/NthReadApiLocal'
import NthReadMockAPI from './components/NthReadMockAPI'
import NthCreateMockAPI from './components/NthCreateMockAPI'

export default function NthApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1> ReactJS - API - Nguyễn Trọng Hưng</h1>
      <hr />
      <NthReadApiLocal />
      <hr />
      <h1>Đọc dữ liệu từ MockAPI </h1>
      <NthReadMockAPI />

      <NthCreateMockAPI />
    </div>
  )
}