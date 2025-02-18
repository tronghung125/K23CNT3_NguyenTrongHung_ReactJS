import React from 'react'

export default function NthFuncComp1(props) {
    return (
        <div>
            <h2>Props is Object</h2>
            <p><b>Infor</b></p>
            <p>Fullname: {props.renderInfo.fullname}</p>
            <p>Age: {props.renderInfo.age}</p>
            <p>Phone: {props.renderInfo.phone}</p>
        </div>
    )
}
