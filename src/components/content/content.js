import React from 'react'
import FlightBoard from './flightBoard'
import Search from './search'

const Content = () => {
  return (
    <div className="content">
      <Search></Search>
      <FlightBoard></FlightBoard>
    </div>
  )
}

export default Content