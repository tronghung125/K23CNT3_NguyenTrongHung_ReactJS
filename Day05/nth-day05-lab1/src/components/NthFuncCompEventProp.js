import React from 'react'

export default function nthFuncCompEventProp(Nthprops) {
    const nthHandleButtonClick1 = ()=>{
        alert('Dữ liệu từ props:' + Nthprops.nthRenderName);
        console.log("Xin chào" + Nthprops.nthRenderName)
    }

    const nthHandleButtonClick2 = (param)=>{
        alert('Dữ liệu từ props:' + Nthprops.nthRenderName);
      console.log('=================================');
      console.log('hi',param);
      console.log('=================================');
      
    }
  return ( 
    <div className='alert alert-danger'>
        <button className='btn btn-primary mx-1 ' onClick={nthHandleButtonClick1}>Button 1</button>
        <button className='btn btn-danger mx-1' onClick={() => nthHandleButtonClick2('Button2')}>Button 2</button>
    </div>
  )
}