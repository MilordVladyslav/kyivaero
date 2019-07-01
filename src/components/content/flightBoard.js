import React from 'react'
import datePicker from '../../images/date-picker.png'
import FlightItems from './flightItems'
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
            <Link to={`/departures/${this.props.urlParams}`}><p className="direction" onClick={this.props.departures}>Вылет</p></Link>
          </div>
          <div className="tab arrivals" onClick={this.props.arrivals}>
            <Link to={`/arrivals/${this.props.urlParams}`}><p className="direction">Прилет</p></Link>
          </div>
        </div>
        <div className="date-block">
          <div className='icon'>
            <p className='current-date'>02/06</p>
            <img src={datePicker} alt=""></img>
          </div>
          <div className="switches">
            <div className="switch" onClick={() => this.props.flightsAccordingToDate(-1)}>
              <p className="date">01/06</p>
              <p className="day">Вчера</p>
            </div>
            <div className="switch" onClick={() => this.props.flightsAccordingToDate()}>
              <p className="date">02/06</p>
              <p className="day">Сегодня</p>
            </div>
            <div className="switch" onClick={() => this.props.flightsAccordingToDate(1)}>
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
            <Route
                path={`/`}
                render={({ match }) => {
                  return (
                    <Route component={() => FlightItems(this.props.items)} />
                  );
                }}
              />
              <Route
                path={`departures${this.props.urlParams}`}

                render={({ match }) => {
                  return (
                    <Route path='/departures' component={() => FlightItems(this.props.items)} />
                  );
                }}
              />
              <Route
                path={`/arrivals${this.props.urlParams}`}
                render={({ match }) => {
                  return (
                    <Route component={() => FlightItems(this.props.items)} />
                  );
                }}
              />
              {/* <Route path='/departure' component={() => FlightItems(this.props.items)} />
              <Route path='/' component={() => FlightItems(this.props.items)} /> */}
            </Switch>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}


export default FlightBoard