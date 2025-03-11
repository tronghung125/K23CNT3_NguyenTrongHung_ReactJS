import React, { useState } from 'react'

export default function NthAddTodo({dispatch}) {
    const [text ,setText] = useState("");

    const nthHandleSubmit = (e)=>{
        e.preventDefault();
        if(text.trim()) {
            dispatch({type: "ADD_TODO", payload: text});
            setText("");
        }
    };
  return (
    <div>
        <form onSubmit={nthHandleSubmit}>  
            <input 
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Nhập công việc...'
             />
             <button type='submit'>Thêm</button>
        </form>
    </div>
  )
}