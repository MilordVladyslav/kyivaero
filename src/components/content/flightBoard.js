import React from 'react'
import datePicker from '../../images/date-picker.png'
import logoAirline from '../../images/logo-airline.png'

const FlightBoard = () => {
  return (
    <div className="flight-board">
      <div className="tabs">
        <div className="tab departures departures-active">
          <p className="direction">Вылет</p>
        </div>
        <div className="tab arrivals">
          <p className="direction">Прилет</p>
        </div>
      </div>
      <div className="date-block">
        <div className='icon'>
          <p className='current-date'>02/06</p>
          <img src={datePicker} alt=""></img>
        </div>
        <div className="switches">
          <div className="switch">
            <p className="date">01/06</p>
            <p className="day">Вчера</p>
          </div>
          <div className="switch">
            <p className="date">02/06</p>
            <p className="day">Сегодня</p>
          </div>
          <div className="switch">
            <p className="date">03/06</p>
            <p className="day">Завтра</p>
          </div>
        </div>
      </div>
      <div className="flight-list">
        <table>
          <thead>
            <tr>
              <th>Терминал</th>
              <th>Время</th>
              <th className="destination">Место назначения</th>
              <th className="status">Статус</th>
              <th className="airline">Авиакомпания</th>
              <th className="flight">Рейс</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><div className="terminal">А</div></td>
              <td>2:40</td>
              <td>Анкара</td>
              <td>Вылетел в 3:01 </td>
              <td className="bla">
                <ul className="airline-name">
                  <li>
                    <div className="details">
                      <div className="logo">
                        <img src={logoAirline} alt="logo"></img>
                      </div>
                      <p className="name">Pegasus</p>
                    </div>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    PC1723
                  </li>
                </ul>
              </td>
              <td>
                <div className="flight-details">
                  <a href="/">Детали рейса</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FlightBoard