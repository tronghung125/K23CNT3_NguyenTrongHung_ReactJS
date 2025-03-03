import React from 'react'

export default function NthRenderArray() {
    const nthNumber = [22,33,44,55,66]
    const nthElement = nthNumber.map((item) => {
       return <li>{item}</li>
    })
  return (
    <div className='alert alert-success'>
      {nthElement}
    </div>
  )
}