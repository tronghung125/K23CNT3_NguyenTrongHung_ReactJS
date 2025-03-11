import React from 'react'
import NthUseState from './components/NthUseState'
import NthUseEffect from './components/NthUseEffect'

export default function VtdApp() {
  return (
    <div className='container border my-2'>
      <h1>Demo React hook</h1>
      <NthUseState />
      <NthUseEffect />
    </div>
  )
}