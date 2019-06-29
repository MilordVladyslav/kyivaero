import React from 'react'
import Row from './row'
const FlightItems = (props) => {
  return (
      props.map((item, index) => {
        return <Row item={item} key={index}></Row>
      })
  )
}

export default FlightItems