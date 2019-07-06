import React from 'react'
import FlightName from './flightName'
import AirlineDetails from './airlineDetails'
import arrowRight from '../../images/arrow-right.png'
const Row = (props) => {
  return (
  <tr>
    <td className="terminal-block">
      <div className="terminal">{props.item.term}</div>
    </td>
    <td className="time-block">
      {props.item.timeDepShedule || props.item.timeArrShedule}
    </td>
    <td className="time-block-mobile mobile-only">
    <table>
        <tbody>
          <tr>
            <td>{props.item.timeDepShedule || props.item.timeArrShedule}</td>
          </tr>
          <tr>
            <td>2</td>
          </tr>
          <tr>
            <td>
            <ul className="flight-name">
              {
                props.item.flight.map((item, index) => {
                  return <FlightName flightName={item} key={index}></FlightName>
                })
              }
            </ul>
            </td>
          </tr>
        </tbody>
     </table>
    </td>
    <td className="destination-block">{props.item.destination}</td>
    <td className="destination-block-mobile mobile-only">
    <table>
        <tbody>
          <tr>
            <td>{props.item.destination}</td>
          </tr>
          <tr>
            <td>{props.item.status}</td>
          </tr>
          <tr>
            <td>
              <ul className="airline-name">
                {
                  props.item.airline.map((item, index) => {
                    return <AirlineDetails airline={item} key={index}></AirlineDetails>
                  })
                }
              </ul>
            </td>
          </tr>
        </tbody>
     </table>
    </td>
    <td className="status-block">
    <span>{props.item.status}</span>
      <div className="mobile-only">
      <a href="/">
        <img src={arrowRight} alt=""></img>
      </a>
      </div>
    </td>
    <td className="company">
      <ul className="airline-name">
        {
          props.item.airline.map((item, index) => {
            return <AirlineDetails airline={item} key={index}></AirlineDetails>
          })
        }
      </ul>
    </td>
    <td className="flight-name-block">
      <ul className="flight-name">
        {
          props.item.flight.map((item, index) => {
            return <FlightName flightName={item} key={index}></FlightName>
          })
        }
      </ul>
    </td>
    <td className="flight-details-block">
      <div className="flight-details">
        <a href="/">Детали рейса</a>
      </div>
      <div className="flight-details-mobile">
        <a href="/"><img src={arrowRight}></img></a>
      </div>
    </td>
  </tr>
  )
}

export default Row