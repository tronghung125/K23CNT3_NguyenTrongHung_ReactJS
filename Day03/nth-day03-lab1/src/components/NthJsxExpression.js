import React from 'react'

export default function NthJsxExpression() {
    // Biến
    const name = "Nguyễn Trọng Hưng";
    // Biến đối tượng
    const user =
    {
        firstName: "Trọng",
        lastName: "Hưng"
    };
    // Hàm
    const fullName = (user) => {
        return user.firstName + ' ' + user.lastName;
    }
    //element
    const element = (
        <div>
            {/*Biểu thức Jsx*/}
            <h2> {fullName(user)} </h2>
            <hr />
            <h3>Welcome to, {name}</h3>
        </div>
    );

    //Hàm
    const sayWelcome = (name) => {
        if (name) {
            return <h3> Welcome to {name}</h3>
        } else {
            return <h3> Welcome to FIT-NTU K23CNT3</h3>
        }
    }
    return (
        <div>
            <h1>NTH - JSX Expression</h1>
            {/* sử dụng biến */}
            {element}

            <hr />
            {sayWelcome()}
            <hr />
            {sayWelcome(" Nguyễn Trọng Hưng")}
        </div>
    )
}

