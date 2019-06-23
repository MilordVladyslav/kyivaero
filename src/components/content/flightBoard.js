import React from 'react'
import datePicker from '../../images/date-picker.png'
import logoAirline from '../../images/logo-airline.png'
import {
  Route,
  Link,
  Switch,
} from 'react-router-dom'
class FlightBoard extends React.Component {
  render () {
    return (
      <div className="flight-board">
        <div className="tabs">
          <div className="tab departures departures-active">
            <Link to='/departure'><p className="direction">Вылет</p></Link>
          </div>
          <div className="tab arrivals" onClick={() => this.props.arrivals('arrivals')}>
            <Link to='/arrivals'><p className="direction">Прилет</p></Link>
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
            <Switch>
              <Route path='/departure' component={() => FlightItems(this.props.items)} />
              <Route path='/' component={() => FlightItems(this.props.items)} />
            </Switch>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const FlightItems = (props) => {
  // const prop = {...props[0]}
  const mydate = new Date(1532450032)
  // console.log(mydate)
  // console.log(props)
  return (
    // <ul>
    // {props.items.map((item) => (
    //     <li key={item.id}>
    //         {item.label}
    //     </li>
    // ))}
    // </ul>
    <tr>
      <td><div className="terminal">{'A'}</div></td>
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
  )
}

export default FlightBoard