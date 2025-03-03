import React from 'react'
import NthLoginCom from './NthLoginCom';
import NthLogoutCom from './NthLogoutCom';

export default function NthLoginControl(props) {
    var isLogIn = props.isLogIn;
    var nthLoginControl = isLogIn? <NthLoginCom />: <NthLogoutCom/>;
  return (
    
    <div>
        {nthLoginControl}
    </div>
  )
}