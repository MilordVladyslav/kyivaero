import React from 'react'

class DetailsPopup extends React.Component {
  render () {
    return (
      <div className={this.props.detailsPopup}>
      <button className="close" onClick={this.props.closeDetailsPopup}>Назад</button>
        <ul className="list">
          <li><a href="/">Купить билеты</a></li>
          <li><a href="/">Купить билеты</a></li>
          <li><a href="/">Купить билеты</a></li>
          <li><a href="/">Купить билеты</a></li>
          <li><a href="/">Купить билеты</a></li>
          <li><a href="/">Купить билеты</a></li>
          <li><a href="/">Купить билеты</a></li>
          <li><a href="/">Купить билеты</a></li>
          <li><a href="/">Купить билеты</a></li>
          <li><a href="/">Купить билеты</a></li>
          <li><a href="/">Купить билеты</a></li>
          <li><a href="/">Купить билеты</a></li>
        </ul>
      </div>
    )
  }
}

export default DetailsPopup