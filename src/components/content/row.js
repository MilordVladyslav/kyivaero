import React from 'react'
import FlightName from './flightName'
import AirlineDetails from './airlineDetails'
const Row = (props) => {
  return (
  <tr>
    <td><div className="terminal">{props.item.term}</div></td>
    <td>{props.item.timeDepShedule || props.item.timeArrShedule}</td>
    <td>{props.item.destination}</td>
    <td>{props.item.status} </td>
    <td className="bla">
      <ul className="airline-name">
        {
          props.item.airline.map((item, index) => {
            return <AirlineDetails airline={item} key={index}></AirlineDetails>
          })
        }
      </ul>
    </td>
    <td>
      <ul className="flight-name">
        {
          props.item.flight.map((item, index) => {
            return <FlightName flightName={item} key={index}></FlightName>
          })
        }
      </ul>
    </td>
    <td>
      <div className="flight-details">
        <a href="/">Детали рейса</a>
      </div>
    </td>
  </tr>
  )
}

export default Row