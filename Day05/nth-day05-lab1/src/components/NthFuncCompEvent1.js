import React from 'react'

export default function NthFuncCompEvent1() {
    // hàm xữ lý sự kiện
    const nthEventButton1Click = () => {
        alert('button 1 - Clicked')
    }

    function nthEventButton2Click() {
        alert('Ngon')
    }

    const nthEventButton3Click = (name) => {
        alert("Name: " + name)
    }
    return (
        <div className='alert alert-info'>
            {/* <button className='btn btn-primary' onClick={nthEventButton1Click()}>Button1</button> */}
            <button className='btn btn-success mx-1' onClick={nthEventButton2Click}>Button2</button>
            <button className='btn btn-success mx-1' onClick={() => nthEventButton3Click("Trọng Hưng")}>Button3</button>
            {/* <button className='btn btn-success' onClick={nthEventButton3Click("Vũ Đức")}>Button4</button> */}
        </div>
    )
}
