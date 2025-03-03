import React, { Component } from 'react'
import NthLoginControl from './NthLoginControl';

export default class NthRenderCondition extends Component {
constructor(props)
{
  super(props);
  this.state={
    isLogIn: false
  }
}
// hàm xử lý sk login
nthHandleLogin = ()=>{
  this.setState({
    isLogIn:true
  })
}
nthHandleLogout = ()=>{
  this.setState({
    isLogIn:false
  })
}

  render() {
    let flag = this.state.isLogIn
    return (
      <div className='alert alert-danger'>
            <h2>Render Condition</h2>
            <hr/>
            <NthLoginControl isLogIn={flag} />
            <hr/>
            {
              flag?<button onClick={this.nthHandleLogout}>Logout</button>:<button onClick={this.nthHandleLogin}>Login</button>
            }
      </div>
    )
  }
}