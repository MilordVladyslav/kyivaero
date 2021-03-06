import React from 'react'
import Row from './row'
class FlightItems extends React.Component{
  componentWillReceiveProps() {
      // ми в Реакті не працюємо з ДОМом напряму
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