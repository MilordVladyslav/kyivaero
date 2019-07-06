import React from 'react'
import popupParamsMobile from '../../state-management/popupParamsMobile'
class DetailsPopup extends React.Component {
  render () {
    if(this.props.detailsPopupItems) {
      let items = popupParamsMobile[this.props.detailsPopupItems].items.map((item, index) => (
        <li key={index}><a href="/">{item}</a></li>
      ))
      return (
        <div className={this.props.detailsPopup}>
        <button className="close" onClick={this.props.closeDetailsPopup}>Назад</button>
          <ul className="list">
          {items}
          </ul>
        </div>
      )
    } else return (
      <div className={this.props.detailsPopup}>
      <button className="close" onClick={this.props.closeDetailsPopup}>Назад</button>
        <ul className="list">
        </ul>
      </div>
    )

  }
}

export default DetailsPopup