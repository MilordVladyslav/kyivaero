import React from 'react'
import FlightBoard from './flightBoard'
import Search from './search'
import urlParamsMaker from '../../helpers/urlMaker'
import Preloader from './preloader'
class Content extends React.Component {
  state = {
    newParamsView: '',
    newParams: '',
    date: ''
  }
  urlParamsMaker = new urlParamsMaker ();
  componentDidMount () {
    this.props.getApiData(this.props.mark, this.formateDate())
  }
  swithcesDates = (arg) => {
    let date = new Date();
    if(arg) {
      date.setDate(date.getDate() + arg)
    }
    let day = date.getDate()
    let month = date.getMonth()
    day = day.toString().length === 1 ? `0${day}` : day
    month = month.toString().length === 1 ? `0${month}` : month
    return `${day}/${month}`
  }
  formateDate = (arg) => {
    let date = new Date();
    if(arg) {
      date.setDate(date.getDate() + arg)
    }
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    day = day.toString().length === 1 ? `0${day}` : day
    month = month.toString().length === 1 ? `0${month+1}` : month+1
    return `${day}-${month}-${year}`
  }
  getDepartures = () => {
    let search = ''
    try{
      search = this.state.newParams.find((item) => (
        item['search']
      ))
    }catch(err) {
      search = false
    }
    if(search) {
      this.props.departures(search)
    } else {
      this.props.departures()
    }
  }
  getArrivals = () => {
    let search = ''
    try{
      search = this.state.newParams.find((item) => (
        item['search']
      ))
    }catch(err) {
      search = false
    }
    if(search) {
      this.props.arrivals(search)
    } else {
      this.props.arrivals()
    }
  }
  applyParamsChanges = (newParams) => {
    this.setState({
      newParamsView: newParams[1],
      newParams: newParams[0]
    })
  }
  flightsAccordingToDate = (arg) => {
    let search = ''
    try{
      search = this.state.newParams.find((item) => (
        item['search']
      ))
    }catch(err) {
      search = false
    }
    this.urlParamsMaker.addParam({
      date: this.formateDate(arg)
    })

    this.setState({
      newParamsView: this.urlParamsMaker.urlParams
    })
    if (search) {
      this.props.getApiData(this.props.mark, this.formateDate(arg), search)
    } else this.props.getApiData(this.props.mark, this.formateDate(arg))
  }
  getContentWithParams = (newParams) => {
    let search = newParams[0].find((item) => (
      item['search']
    ))
      if(search){
        this.props.getFlightsWithParams(search)
      } else this.props.mark === 'departure'
            ? this.getDepartures()
            : this.getArrivals()
    this.applyParamsChanges(newParams)
  }
  render () {
    if(this.props.items) {
      return (
        <div className="content">
          <Search applyParamsChanges={this.applyParamsChanges} urlParamsMaker={this.urlParamsMaker} getContentWithParams={this.getContentWithParams}></Search>
          <FlightBoard
          items={this.props.items}
          departures = {this.getDepartures}
          switchDateValue = {this.swithcesDates}
          flightsAccordingToDate = {this.flightsAccordingToDate}
          arrivals = {this.getArrivals}
          urlParams = {this.state.newParamsView}></FlightBoard>
        </div>
      );
    }
    return (
      <div className="content">
      <Preloader></Preloader>
      </div>
    )

  }
}

export default Content