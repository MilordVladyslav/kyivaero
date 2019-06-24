import React from 'react'
import airtickets from '../../images/airtickets.jpg'
import vip from '../../images/vip.jpg'
const Popup = (props) => {
  const popupClasses = props.menuItemActive ? 'popup-menu open' : 'popup-menu';
  let firstInfoBlock = ''
  let secondInfoBlock = ''
  let firstInfoBlockTitle = ''
  let secondInfoBlockTitle = ''
  let img = ''
  let offersBlock = {
    img: '',
    title: '',
    description: '',
    button: ''
  }
  if(props.information) {
    offersBlock = {...props.information.offersBlock}
    img = props.information.offersBlock.img === 'airtickets'
      ? airtickets
      : vip

    firstInfoBlockTitle = props.information.informationBlocks[0].title
    secondInfoBlockTitle = props.information.informationBlocks[1].title

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
          <img src={img} alt=""></img>
          <div className="description">
            <h3>{offersBlock.title}</h3>
            <p>{offersBlock.description}</p>
            <a href="/">{offersBlock.button}</a>
          </div>
        </div>
        <div className="information-block">
          <div className="information">
            <h4>{firstInfoBlockTitle}</h4>
            <ul>
              {firstInfoBlock}
            </ul>
          </div>
          <div className="information">
            <h4>{secondInfoBlockTitle}</h4>
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