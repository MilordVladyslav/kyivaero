import React from 'react'
import FlightBoard from './flightBoard'
import Search from './search'

class Content extends React.Component {
  state = {
    items: []
  }

  componentDidMount () {
    this.props.departures()
    setTimeout(() => {
      this.setState({
        ...this.props
      })
    }, 1000)
  }
  componentDidUpdate (prevProps, prevState) {
    if(prevProps !== this.props) {
      this.setState({
        items: this.props
      })
    }
  }
  render () {
    // console.log(Array.isArray(this.props.items)
    if(this.props.items) {
      return (
        <div className="content">
          <Search></Search>
          <FlightBoard arrivals={this.props.arrivals} items={this.props.items}></FlightBoard>
        </div>
      )
    }
    return (
      <div className="content"></div>
    )

  }
}

export default Content