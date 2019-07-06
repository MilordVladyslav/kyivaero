import React from 'react'
import datePicker from '../../images/date-picker.png'
import FlightItems from './flightItems'
import ReactCSSTransitionGroup from 'react-transition-group'
import {
  Route,
  Link,
  Switch,
} from 'react-router-dom'
class FlightBoard extends React.Component {
  state = {
    yesterday: '',
    today: '',
    tomorrow: '',
    current: '',
    activeTab: 'departures'
  }
  componentDidMount () {
    this.setState({
      yesterday: this.switchesDatesView(-1),
      today: this.switchesDatesView(),
      tomorrow: this.switchesDatesView(1),
      current: this.switchesDatesView()
    })
  }
  switchesDatesView = (arg) => {
    let date = new Date();
    if(arg) {
      date.setDate(date.getDate() + arg)
    }
    let day = date.getDate()
    let month = date.getMonth()
    day = day.toString().length === 1 ? `0${day}` : day
    month = month.toString().length === 1 ? `0${month+1}` : month+1
    this.setState({
      current: `${day}/${month}`
    })
    return `${day}/${month}`
  }
  switchTabs = (arg) => {
    this.setState({
      activeTab: arg
    })
    arg === 'departures'
    ? this.props.departures()
    : this.props.arrivals()
  }
  switchesDates = (arg) => {
    this.switchesDatesView(arg)
    this.props.flightsAccordingToDate(arg)
  }
  render () {
    let departuresTabClasses = this.state.activeTab === 'departures'
      ? 'tab departures departures-active'
      : 'tab departures'
    let arrivalsTabClasses = this.state.activeTab === 'arrivals'
      ? 'tab arrivals arrivals-active'
      : 'tab arrivals'
    let statusLineClasses = ''
    if (this.state.current === this.state.today) statusLineClasses = 'status-line center'
    if (this.state.current === this.state.yesterday) statusLineClasses = 'status-line left'
    if(this.state.current === this.state.tomorrow) statusLineClasses = 'status-line right'
    return (
      <div className="flight-board">
        <div className="tabs">
          <Link to={`/departures/${this.props.urlParams}`}>
            <div className={departuresTabClasses} onClick={() => this.switchTabs('departures')}>
              <p className="direction" >Вылет</p>
            </div>
          </Link>
          <Link to={`/arrivals/${this.props.urlParams}`}>
            <div className={arrivalsTabClasses} onClick={() => this.switchTabs('arrivals')}>
              <p className="direction">Прилет</p>
            </div>
          </Link>

        </div>
        <div className="date-block">
          <div className='icon'>
            <p className='current-date'>{this.state.current}</p>
            <img src={datePicker} alt=""></img>
          </div>
          <div className="switches">
            <div className={this.state.current === this.state.yesterday ? 'switch active' : 'switch'} onClick={() => this.switchesDates(-1)}>
              <p className="date">{this.state.yesterday}</p>
              <p className="day">Вчера</p>
            </div>
            <div className={this.state.current === this.state.today ? 'switch active' : 'switch'} onClick={() => this.switchesDates()}>
              <p className="date">{this.state.today}</p>
              <p className="day">Сегодня</p>
            </div>
            <div className={this.state.current === this.state.tomorrow ? 'switch active' : 'switch'} onClick={() => this.switchesDates(1)}>
              <p className="date">{this.state.tomorrow}</p>
              <p className="day">Завтра</p>
            </div>
            <div className="line-bottom">
              <div className={statusLineClasses}></div>
            </div>
          </div>
        </div>
        <div className="flight-list">
          <table>
            <thead>
              <tr>
                <th className="terminal">Терминал</th>
                <th className="time">Время</th>
                <th className="destination">Место назначения</th>
                <th className="status">Статус</th>
                <th className="airline">Авиакомпания</th>
                <th className="flight">Рейс</th>
              </tr>
            </thead>
            <tbody id="tableBody">
            <Switch>
            <Route
                path={`/`}
                render={({ match }) => {
                  return (
                      <FlightItems items = {this.props.items}></FlightItems>
                  );
                }}
              />
              {/* <Route
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
              /> */}
            </Switch>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}


export default FlightBoard