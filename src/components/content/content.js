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
    // console.log(Array.isArray(this.props.items))
    // console.log(this.props.items)
    // if(this.state[0]) {
    //   // console.log(this.state)
    //   let items = []
    //   for(let key in this.state) {
    //     items.push(this.state[key])
    //   }
    //   // console.log(items[0]['term'])
    // }
    return (
      <div className="content">

        <Search></Search>
        <FlightBoard arrivals={this.props.arrivals} items={this.props.items}></FlightBoard>

      </div>
    )
  }
}

export default Content