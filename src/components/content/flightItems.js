import React from 'react'
import Row from './row'
import ReactCSSTransitionGroup from 'react-transition-group'
class FlightItems extends React.Component{
  componentWillReceiveProps() {
      document.getElementById('tableBody').classList.add('slip')
      setTimeout(() => {
        document.getElementById('tableBody').classList.remove('slip')
      }, 500)
  }
  render () {
    let items = this.props.items.map((item, index) => {
      return <Row item={item} key={index}></Row>
    })
    return (
      items
    )
  }
}

export default FlightItems