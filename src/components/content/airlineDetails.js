import React from 'react'
import logoAirline from '../../images/logo-airline.png'
const AirlineDetails = (props) => {
  return (
    <li>
      <div className="details">
        <div className="logo">
          <img src={logoAirline} alt="logo"></img>
        </div>
        <p className="name">{props.airline}</p>
      </div>
    </li>

  )
}

export default AirlineDetails