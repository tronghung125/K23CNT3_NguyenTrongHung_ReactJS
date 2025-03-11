import React, { useEffect, useState } from 'react'

export default function NthUseEffect() {
    // state 
    const [nthCount, setNthCount] = useState(0)
    // useEffect sử dụng 1 tham số : Được thực hiện Mổi khi render / re-render
    useEffect(() => {
        console.log("Đây là useEffect 1 tham số");

    });


    // useEffect sử dụng 2 tham số; tham số thứ 2 là mảng rỗng được gọi duy nhất 1 lần khi render
    useEffect(() => {
        console.log("Đây là useEffet 2 tham số,thứ 2 là mảng rỗng []");

    }, [])

    // useEffect sử dụng 2 tham số; tham số thứ 2 là mảng các đối tượng phụ thuộc
    // +> Được gọi mỗi khi thay đổi
    // khởi tạo state là mảng
    const nthArr = [1, 2, 3, 4, 5, 6];
    const [nthArray, setNthArray] = useState(nthArr);
    useEffect(() => {
        console.log("Đây là useEffet 2 tham số,tham số thứ 2 là mảng các đối tượng phụ thuộc[Array]");

    }, [nthArray]);

    useEffect(() => {
        console.log("Đây là useEffet 2 tham số,tham số thứ 2 là mảng các đối tượng phụ thuộc [nthCount]");

    }, [nthCount])

    const nthHandleAddList=()=>{
        setNthArray([
          ...nthArray,
         parseInt(Math.random()*100),
        ]) 
     }
    return (
        <div className='alert alert-info'>
            <h2>Demo UseEffect </h2>
            <h3>Count: {nthCount}</h3>
            <button onClick={() => setNthCount(nthCount + 1)} > Click Here</button>
            <div>
                <h3>Array: {nthArray.toString()}</h3>
                <button onClick={nthHandleAddList}>Thêm Phần tử +</button>
            </div>
        </div>
    )
}