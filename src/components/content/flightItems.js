import React from 'react'
import Row from './row'
const FlightItems = (props) => {
  console.log(props[0])
  return (
      props.map((item, index) => {
        return <Row item={item} key={index}></Row>
      })
  )
}

export default FlightItems