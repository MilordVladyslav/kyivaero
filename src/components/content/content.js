import React from 'react'
import FlightBoard from './flightBoard'
import Search from './search'
import {Route} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
class Content extends React.Component {
  state = {
    newParams: ''
  }

  componentDidMount () {
    this.props.getApiData('departures')
  }
  getDepartures = () => {
    return this.props.getApiData('departures')
  }
  getArrivals = () => {
    this.props.getApiData('arrivals')
  }
  applyParamsChanges = (newParams) => {
    this.setState({
      newParams
    })
  }
  render () {
    if(this.props.items) {
      return (
        <Router>
        <div className="content">
          <Search applyParamsChanges={this.applyParamsChanges}></Search>
          <FlightBoard items={this.props.items} departures = {this.getDepartures}  arrivals = {this.getArrivals} urlParams = {this.state.newParams}></FlightBoard>
        </div>
        </Router>
      );
    }
    return (
      <div className="content"></div>
    )

  }
}

export default Content