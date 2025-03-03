import React, { Component } from 'react'
import NthEventFormUncontroller from './components/NthEventFormUncontroller'
import NthRenderCondition from './components/NthRenderCondition'
import NthRenderArray from './components/NthRenderArray'
import NthRenderListObject from './components/NthRenderListObject'
import NthBaiTap from './components/NthBaiTap'

export default class NthApp extends Component {
  render() {
    return (
      <div>
        <NthRenderCondition />
        <hr />
        <NthEventFormUncontroller />
        <hr />
        <NthRenderArray />
        <hr />
        <NthRenderListObject />
        <hr style={{ border: "20px solid black" }} />
        <NthBaiTap />
      </div>
    )
  }
}
