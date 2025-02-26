import React, { Component } from 'react'
import NthEventForm1 from './components/NthEventForm1'
import NthEventForm2 from './components/NthEventForm2'
import NthEventForm3 from './components/NthEventForm3'
import NthEventForm4 from './components/NthEventForm4'
import NthEventForm5 from './components/NthEventForm5'

export default class NthApp extends Component {
  render() {
    return (
      <div>
        <h1 className='text-center'>Event Form - Demo</h1>
        <hr />
        <NthEventForm1 />
        <NthEventForm2 />
        <NthEventForm3 />
        <NthEventForm4 />
        <NthEventForm5 onNthHandleSubmit={this.NthHandleSubmitForm} />
      </div>
    )
  }
}
