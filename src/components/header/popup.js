import React from 'react'
import airtickets from '../../images/airtickets.jpg'
const Popup = (props) => {
  const popupClasses = props.menuItemActive ? 'popup-menu open' : 'popup-menu';
  let firstInfoBlock = 'Моя'
  let secondInfoBlock = 'Обарона'
  if(props.information) {
    firstInfoBlock = props.information.informationBlocks[0].items.map((item, index) => {
      return (
        <li key={index}> <a href="/"> {item} </a></li>
      )
    })
    secondInfoBlock = props.information.informationBlocks[1].items.map((item, index) => {
      return (
        <li key={index}> <a href="/"> {item} </a> </li>
      )
    })
  }
  return (
    <div className={popupClasses}>
      <div className="container">
        <div className="offer-block">
          <img src={airtickets} alt=""></img>
          <div className="description">
            <h3>Авиабилеты</h3>
            <p>Вы можете купить авиабилеты онлайн</p>
            <a href="/">Купить билет</a>
          </div>
        </div>
        <div className="information-block">
          <div className="information">
            <h4>Информация</h4>
            <ul>
              {firstInfoBlock}
            </ul>
          </div>
          <div className="information">
            <h4>Общее</h4>
            <ul>
              {secondInfoBlock}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup