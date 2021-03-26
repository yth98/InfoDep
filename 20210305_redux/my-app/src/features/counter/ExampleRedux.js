import React from 'react'
import { useSelector } from 'react-redux'
import { selectCount } from './counterSlice'

const ExampleRedux = () => {
  return (
    <div>Get state with redux: { useSelector(selectCount) }</div>
  )
}

export default ExampleRedux
