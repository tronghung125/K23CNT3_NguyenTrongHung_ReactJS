import React, { Component } from 'react'

export default class nthcompA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Nguyễn Trọng Hưng",
            address:"Hà Nội",
        };
    }
    render() {
        return (
            <div>
                <h2>NthCompA</h2>
                <p> Dữ liệu trong state: {this.state.name}</p>
                <p> Dữ liệu trong state: {this.state.address}</p>

                <h3> Hiển thị dữ liệu từ props</h3>
                <p>Name: {this.props.nthName}</p>
                <p>Address: {this.props.nthAddress}</p>            
            </div>
        )
    }
}
